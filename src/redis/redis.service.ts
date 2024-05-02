import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { Transport, ClientOptions } from '@nestjs/microservices';

@Injectable()
export class RedisService {
  private client: ClientProxy;

  constructor() {
    const redisOptions: ClientOptions = {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    };
    this.client = ClientProxyFactory.create(redisOptions);
  }

  async publish(channel: string, data: any): Promise<void> {
    await this.client.emit(channel, data).toPromise();
    console.log(
      `Message published to channel ${channel}: ${JSON.stringify(data)}`,
    );
  }

  async subscribe(
    channel: string,
    callback: (data: any) => void,
  ): Promise<void> {
    await this.client.connect();
    await this.client.send(channel, {}).subscribe(callback);
    console.log(`Subscribed to channel ${channel}`);
  }
}

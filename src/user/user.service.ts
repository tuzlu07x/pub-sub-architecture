import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class UserService {
  constructor(private readonly redisService: RedisService) {}

  async subscribeUser(
    channel: string,
    callback: (data: any) => void,
  ): Promise<void> {
    await this.redisService.subscribe(channel, callback);
  }
}

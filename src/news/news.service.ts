import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class NewsService {
  constructor(private readonly redisService: RedisService) {}

  async publishNews(channel: string, data: any): Promise<void> {
    await this.redisService.publish(channel, data);
  }
}

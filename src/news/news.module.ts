import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { RedisService } from 'src/redis/redis.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService, RedisService],
})
export class NewsModule {}

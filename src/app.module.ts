import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';
import { NewsModule } from './news/news.module';
import { UserModule } from './user/user.module';
import { NewsSubscriptionService } from './news/news.subscription.service';
import { NewsService } from './news/news.service';
import { UserService } from './user/user.service';
import { RedisService } from './redis/redis.service';

@Module({
  imports: [RedisModule, NewsModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    NewsSubscriptionService,
    NewsService,
    UserService,
    RedisService,
  ],
})
export class AppModule {}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NewsSubscriptionService } from './news/news.subscription.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const newsSubscriptionService = app.get(NewsSubscriptionService);
  await newsSubscriptionService.initialize();
}

bootstrap();

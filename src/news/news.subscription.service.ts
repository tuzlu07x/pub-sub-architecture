import { Injectable } from '@nestjs/common';
import { NewsService } from './news.service';
import { UserService } from 'src/user/user.service';
import { User } from 'src/entities/users.entity';
import { News } from 'src/entities/news.entity';

@Injectable()
export class NewsSubscriptionService {
  constructor(
    private readonly newsService: NewsService,
    private readonly userService: UserService,
  ) {}

  async initialize() {
    const users = this.getUsers();
    for (let user of users) {
      await this.userService.subscribeUser(user.channel, (data: any) => {
        console.log(`${user.username} için gelen haber: ${data.title}`);
      });
    }

    const news = this.getNews();
    for (let newsItem of news) {
      await this.newsService.publishNews(newsItem.type, newsItem);
    }
  }

  private getUsers(): User[] {
    return [
      new User(1, 'user1', 'politics'),
      new User(2, 'user2', 'magazine'),
      new User(3, 'user3', 'politics'),
      new User(4, 'user4', 'magazine'),
    ];
  }

  private getNews(): News[] {
    return [
      new News(1, 'Politics news 1', 'politics'),
      new News(2, 'Politics news 2', 'politics'),
      new News(3, 'Magazine haber 1', 'magazine'),
      new News(4, 'Magazine haber 2', 'magazine'),
    ];
  }
}

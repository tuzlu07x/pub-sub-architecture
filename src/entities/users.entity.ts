export class User {
  id: number;
  username: string;
  interest: string;
  channel: string;

  constructor(id: number, username: string, interest: string) {
    this.id = id;
    this.username = username;
    this.interest = interest;
    this.channel = `${interest}_channel`;
  }
}

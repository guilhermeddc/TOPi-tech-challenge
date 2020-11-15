export interface IRepository {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
}

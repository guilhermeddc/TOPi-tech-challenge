import { Request, Response } from "express";
import api from "../services/api";

interface ResForApi {
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

class RepositoryController {
  async index(req: Request, res: Response) {
    const { page = 1, per_page = 10, sort = "stars" } = req.query;
    const { lang } = req.params;

    try {
      const { data: responseForApi } = await api.get(
        `/repositories?q=language:${lang}&sort=${sort}&page=${page}&per_page=${per_page}`
      );

      const resForApiSerialized = (responseForApi.items as ResForApi[]).map(
        (item) => {
          return {
            id: item.id,
            name: item.name,
            owner: {
              login: item.owner.login,
              avatar_url: item.owner.avatar_url,
              html_url: item.owner.html_url,
            },
            html_url: item.html_url,
            description: item.description,
            stargazers_count: item.stargazers_count,
            language: item.language,
            forks_count: item.forks_count,
          };
        }
      );

      return res.status(200).json(resForApiSerialized);
    } catch (error) {
      return res
        .status(400)
        .json({ error: `System internal error -> ${error}` });
    }
  }
}

export default new RepositoryController();

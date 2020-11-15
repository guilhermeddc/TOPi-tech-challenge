import React from 'react';
import {
  GoRepoForked,
  GoStar,
  GoPrimitiveDot,
  GoLinkExternal,
} from 'react-icons/go';

import {IRepository} from '../../utils/interfaces';

import './styles.css';

const Card: React.FC<Omit<IRepository, 'id'>> = ({
  name,
  owner,
  html_url,
  description,
  stargazers_count,
  language,
  forks_count,
}) => {
  return (
    <div className="Card">
      <header className="Card-header">
        <a href={owner.html_url}>
          <img src={owner.avatar_url} alt={owner.login} />
        </a>
        <h3>
          {name} / {owner.login}
        </h3>
      </header>

      <main className="Card-main">
        <div className="Card-main-header">
          <div>
            <GoStar />
            <p>{stargazers_count}</p>
          </div>
          <div>
            <GoRepoForked />
            <p>{forks_count}</p>
          </div>
        </div>

        <div className="Card-main-description">
          <p>{description}</p>
        </div>
      </main>

      <footer className="Card-footer">
        <div>
          <GoPrimitiveDot />
          <p>{language}</p>
        </div>
        <a href={html_url}>
          <GoLinkExternal />
        </a>
      </footer>
    </div>
  );
};

export default Card;

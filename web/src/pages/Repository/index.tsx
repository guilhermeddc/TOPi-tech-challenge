import React, {useCallback, useState} from 'react';
import {GoSearch} from 'react-icons/go';

import api from '../../services/api';
import {IRepository} from '../../utils/interfaces';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

import logo from '../../assets/images/github.svg';

import './styles.css';

const Repository: React.FC = () => {
  const [lang, setLang] = useState('');
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  const handleSetlang = useCallback(e => {
    const value = e.target.value;
    setLang(value);
  }, []);

  const hangleGetRepositories = useCallback(async () => {
    if (lang) {
      setLoading(true);

      const {data: response} = await api.get(`/repositories/${lang}`);

      setRepositories(response);
      setLang('');

      setLoading(false);
    } else {
      alert('Choose the desired language');
    }
  }, [lang]);

  return (
    <div className="Repository">
      <header className="Repository-header">
        <div className="container">
          <p>Search your favorite language repositories</p>
          <img src={logo} className="Repository-logo" alt="logo" />
        </div>
      </header>

      <main className="Repository-main container">
        <label htmlFor="search">
          <input
            type="text"
            name="lang"
            id="lang"
            placeholder="Search for language"
            value={lang}
            onChange={handleSetlang}
          />
          <button onClick={hangleGetRepositories}>
            <GoSearch size={24} color="#282c34" />
          </button>
        </label>

        <section className="Repository-content">
          {repositories?.map(item => (
            <Card
              key={item.id}
              name={item.name}
              description={item.description}
              forks_count={item.forks_count}
              html_url={item.html_url}
              language={item.language}
              owner={item.owner}
              stargazers_count={item.stargazers_count}
            />
          ))}
        </section>
      </main>

      <footer className="Repository-footer">
        <p>© 2020 Copyright: Guilherme Rodrigues </p>
      </footer>

      <Loading active={loading} />
    </div>
  );
};

export default Repository;

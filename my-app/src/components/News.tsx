import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const News: React.FC = () => {
  const { t } = useTranslation();
  const newsList = [
    { id: 1, title: 'News 1' },
    { id: 2, title: 'News 2' }
  ];

  return (
    <div>
      <h2>{t('news')}</h2>
      <ul>
        {newsList.map(news => (
          <li key={news.id}>
            <Link to={`/news/${news.id}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;

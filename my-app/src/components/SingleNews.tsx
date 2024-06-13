import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SingleNews: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const newsItem = { id, title: 'News Title', content: 'News Content' };

  return (
    <div>
      <h2>{newsItem.title}</h2>
      <p>{newsItem.content}</p>
    </div>
  );
};

export default SingleNews;

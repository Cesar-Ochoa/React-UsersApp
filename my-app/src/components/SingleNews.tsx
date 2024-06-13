import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';

const SingleNews: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const newsItem = { id, title: 'News Title', content: 'News Content' };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{newsItem.title}</Typography>
      <Typography>{newsItem.content}</Typography>
    </Container>
  );
};

export default SingleNews;

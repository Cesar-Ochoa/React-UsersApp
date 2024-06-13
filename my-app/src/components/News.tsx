import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const News: React.FC = () => {
  const { t } = useTranslation();
  const newsList = [
    { id: 1, title: 'News 1' },
    { id: 2, title: 'News 2' }
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{t('news')}</Typography>
      <List>
        {newsList.map(news => (
          <ListItem button key={news.id} component={RouterLink} to={`/news/${news.id}`}>
            <ListItemText primary={news.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default News;

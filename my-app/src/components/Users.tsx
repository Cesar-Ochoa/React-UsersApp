import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

interface User {
  id: number;
  name: string;
}

const Users: React.FC = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(storedUsers);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{t('users')}</Typography>
      <Button variant="contained" color="primary" component={RouterLink} to="/user/new">
        {t('create_user')}
      </Button>
      <List>
        {users.map(user => (
          <ListItem button key={user.id} component={RouterLink} to={`/user/${user.id}`}>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Users;

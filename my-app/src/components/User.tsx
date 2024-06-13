import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

interface User {
  id: number;
  name: string;
}

const User: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [name, setName] = useState('');

  useEffect(() => {
    if (id !== 'new' && id !== undefined) {
      const userId = parseInt(id, 10);
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const user = storedUsers.find((user: User) => user.id === userId);
      if (user) {
        setName(user.name);
      }
    }
  }, [id]);

  const handleSave = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (id === 'new' || id === undefined) {
      const newUser = { id: Date.now(), name };
      storedUsers.push(newUser);
    } else {
      const userId = parseInt(id, 10);
      const userIndex = storedUsers.findIndex((user: User) => user.id === userId);
      if (userIndex !== -1) {
        storedUsers[userIndex].name = name;
      }
    }
    localStorage.setItem('users', JSON.stringify(storedUsers));
    navigate('/');
  };

  const handleDelete = () => {
    if (id !== undefined) {
      const userId = parseInt(id, 10);
      let storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      storedUsers = storedUsers.filter((user: User) => user.id !== userId);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      navigate('/');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {id === 'new' ? t('create_user') : t('edit_user')}
      </Typography>
      <Box component="form" onSubmit={(e) => { e.preventDefault(); handleSave(); }} noValidate>
        <TextField
          label={t('name')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        /><br />
        <Button type="submit" variant="contained" color="primary">
          {t('save')}
        </Button><br />
        {id !== 'new' && (
          <Button variant="contained" color="secondary" onClick={handleDelete}>
            {t('delete_user')}
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default User;

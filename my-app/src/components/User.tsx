import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
    <div>
      <h2>{id === 'new' ? t('create_user') : t('edit_user')}</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <label>
          {t('name')}
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">{t('save')}</button>
        {id !== 'new' && (
          <button type="button" onClick={handleDelete}>{t('delete_user')}</button>
        )}
      </form>
    </div>
  );
};

export default User;

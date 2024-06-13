import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const User: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const user = { id, name: id === 'new' ? '' : 'John Doe' };

  const handleSave = () => {
    navigate('/');
  };

  const handleDelete = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>{id === 'new' ? t('create_user') : t('edit_user')}</h2>
      <form>
        <input type="text" value={user.name} onChange={() => {}} />
        <button type="button" onClick={handleSave}>{t('save')}</button>
        {id !== 'new' && (
          <button type="button" onClick={handleDelete}>{t('delete_user')}</button>
        )}
      </form>
    </div>
  );
};

export default User;

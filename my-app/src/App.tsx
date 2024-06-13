import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import User from './components/User';
import News from './components/News';
import SingleNews from './components/SingleNews';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <div>
        <h1>{t('app_title')}</h1>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<SingleNews />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

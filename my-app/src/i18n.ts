import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "app_title": "My Application",
      "users": "Users",
      "news": "News",
      "create_user": "Create User",
      "edit_user": "Edit User",
      "delete_user": "Delete User",
      // Add more translations here
    }
  },
  es: {
    translation: {
      "app_title": "Mi Aplicación",
      "users": "Usuarios",
      "news": "Noticias",
      "create_user": "Crear Usuario",
      "edit_user": "Editar Usuario",
      "delete_user": "Eliminar Usuario",
      // Add more translations here
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

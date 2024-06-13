import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "app_title": "Add Edit Remove Users",
      "users": "Users",
      "news": "News",
      "create_user": "Create User",
      "edit_user": "Edit User",
      "delete_user": "Delete User",
      "save": "Save",
      "name": "Name"
    }
  },
  es: {
    translation: {
      "app_title": "Agregar Editar Remover Usuarios",
      "users": "Usuarios",
      "news": "Noticias",
      "create_user": "Crear Usuario",
      "edit_user": "Editar Usuario",
      "delete_user": "Eliminar Usuario",
      "save": "Guardar",
      "name": "Nombre"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", //Change the language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

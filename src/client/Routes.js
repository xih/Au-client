import App from './App';
import HomePage from './pages/HomePage';
import UserListPage, { loadData } from './pages/UserListPage';
import AdminListPage from './pages/AdminListPage';
import ItemDetailPage from './pages/ItemDetailPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UserListPage,
        path: '/users',
        exact: true,
        loadData
      },
      {
        ...AdminListPage,
        path: '/admins'
      },
      {
        ...ItemDetailPage,
        path: '/:slug',
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
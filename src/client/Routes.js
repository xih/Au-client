import App from './App'
import HomePage from './pages/HomePage'
import UserListPage, { loadData } from './pages/UserListPage'
import AdminListPage from './pages/AdminListPage'
import ItemDetailPage from './pages/ItemDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetailPage from './pages/ProductDetailPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

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
        ...SignupPage,
        path: '/signup'
      },
      {
        ...ProductDetailPage,
        path: '/shearling-jacket'
      },
      {
        ...LoginPage,
          path: '/login'
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
]

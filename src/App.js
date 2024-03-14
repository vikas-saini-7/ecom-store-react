import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'cart',
        element: <CartPage/>
      },
      {
        path: 'favorites',
        element: <FavoritesPage/>
      },
      {
        path: 'products',
        element: <ProductsPage/>
      },
      {
        path: 'products/:productId',
        element: <ProductDetailsPage/>
      },
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

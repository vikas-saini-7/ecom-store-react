import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/products',
        element: <ProductsPage/>
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

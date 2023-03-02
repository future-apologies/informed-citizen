import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const HeaderLayout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      }
    ],
  },
])


function App() {


  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;

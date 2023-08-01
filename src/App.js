import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Representatives from './components/Representatives';
import Legislation from './components/Legislation';
import About from './components/About';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_PROPUBLICA_API_KEY;
const baseURL = "https://api.propublica.org/congress/v1/117/senate/members.json";
const headers = {
  'X-API-Key': API_KEY,
};

const HeaderLayout = (API_KEY, basURL, headers) => (
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
        element: <Home baseURL={baseURL} API_KEY={API_KEY} headers={headers}/>
      },
      {
        path: '/Representatives',
        element: <Representatives />
      },
      {
        path: '/Legislation',
        element: <Legislation />
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
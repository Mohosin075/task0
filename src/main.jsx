import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/about/About.jsx';
import Home from './pages/home/Home.jsx';
import CardDetails from './pages/cardDetails/CardDetails.jsx';
import BookTicket from './pages/BookTicket/BookTicket.jsx';
import MyBook from './pages/myBook/MyBook.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('https://api.tvmaze.com/search/shows?q=all')
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/myBook',
        element : <MyBook></MyBook>
      },
      {
        path : '/details/:id',
        element : <CardDetails></CardDetails>,
        loader : () => fetch('https://api.tvmaze.com/search/shows?q=all')
      },
      {
        path : '/ticketBook/:id',
        element : <BookTicket></BookTicket>,
        loader : () => fetch('https://api.tvmaze.com/search/shows?q=all')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

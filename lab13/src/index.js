import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route,Routes,BrowserRouter,Link} from 'react-router-dom';
import App from './App';
import Users from './users';
import Contact from './contact';
import Notfound  from './notfound';
const routing = (
  <div>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/usuarios">Users</Link>
        </li>
        <li>
          <Link to="/contacto">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/usuarios/:id" element={<Users />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element = {<Notfound />} />
      </Routes>
    </BrowserRouter>
  </div>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

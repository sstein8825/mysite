import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Container } from 'reactstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNav from './component/MyNav';
import App from './App';
import MyProjects from './component/Projects';
import MyAbout from './component/About';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
        <Container>
          <BrowserRouter>
            <MyNav />
            <Routes>
              <Route exact path='/' element={<App />} />
              <Route path='/projects' element={<MyProjects/>} />
              <Route path='/about' element={<MyAbout/>} />
              <Route render={function () {
                return <p>Not found</p>
              }} />
            </Routes>
          </BrowserRouter>
        </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

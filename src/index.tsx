import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './Components/LayoutArea/Routing/Routing';
import { PrimeReactProvider } from "primereact/api";
import interceptorsService from './Services/InterceptorsService';

interceptorsService.createInterceptors();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  );


root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);

reportWebVitals();

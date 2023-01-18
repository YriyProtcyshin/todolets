import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/todolets">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

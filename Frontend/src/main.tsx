import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './AppRoutes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AppRoute />
    </Router>
  </StrictMode>,
)

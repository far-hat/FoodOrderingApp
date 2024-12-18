import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './AppRoutes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Auth0ProviderWithNavigate>
          <AppRoute />
      </Auth0ProviderWithNavigate>
      
    </Router>
  </StrictMode>,
)

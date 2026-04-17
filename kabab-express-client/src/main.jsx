import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Router/Route.jsx'
import { HelmetProvider } from 'react-helmet-async'

import AuthProvider from './Providers/AuthProvider.jsx'
import CartProvider from './Providers/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <HelmetProvider>
          <RouterProvider router={Route} />
        </HelmetProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)

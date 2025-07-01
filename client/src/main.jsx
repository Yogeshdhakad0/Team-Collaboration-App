import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './feature/store.js'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>

  <Auth0Provider
    domain="dev-ao5yofbi1v1b0e4z.us.auth0.com"
    clientId="5CnWslGCuyP3nGQny4Q3RwKOJ9Eg05rG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
    </Provider>
  </StrictMode>,
)

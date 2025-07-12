import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './store/store.js'

createRoot(document.getElementById('root')).render(
  //Providing store that can be accessed throughout the project
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)

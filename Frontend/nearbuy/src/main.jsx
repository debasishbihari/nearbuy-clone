
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';
import AuthContextProvider from './context/AuthContext';
import { QueryContextProvider } from './context/QueryContextProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryContextProvider>
    <AuthContextProvider>
  <ChakraProvider >
  <BrowserRouter>

    <App />
 
  </BrowserRouter>
  </ChakraProvider> 
  </AuthContextProvider>
  </QueryContextProvider>
  </Provider>
)


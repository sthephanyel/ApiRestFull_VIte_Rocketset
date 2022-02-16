import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import {QueryClientProvider} from 'react-query';
import { queryclient } from './services/queryClient';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryclient}>
    <App />
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

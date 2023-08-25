import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/output.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  // uri is going to change
  uri: 'https://88b2389c-c16e-4bf8-9ab2-202e67a99183.mock.pstmn.io/graphql',
  cache: new InMemoryCache(),
});


root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/output.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: "https://everuse-be-b6017dbfcc94.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

root.render(
  <BrowserRouter>
    <CookiesProvider defaultSetCookies={{ path: "/" }}>
      <ApolloProvider client={client}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ApolloProvider>
    </CookiesProvider>
  </BrowserRouter>
);

reportWebVitals();

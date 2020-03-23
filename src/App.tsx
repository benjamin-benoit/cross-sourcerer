import React from 'react';
import './App.css';
import ApolloClient, { gql }  from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Header from './components/Header/index'
import Language from './components/Language/index'
import Repositories from './components/Repositories/index'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const { REACT_APP_TOKEN } = process.env;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${REACT_APP_TOKEN}`,
      },
    });
  },
});

// const REQ = gql`
// query {
//   viewer {
//   repositories(first: 5) {
//       nodes {
//           id
//           name
//           } 
//       }
//   }
// }
// `;

// client.query({ query: REQ }).then(result => {
//   console.log(result)
// }).catch(error => {
//   console.log(process.env.REACT_APP_TOKEN);
//   console.log(error)
// } )

function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <Language/>
      <Repositories/>
    </ApolloProvider>
  );
}

export default App;

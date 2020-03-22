import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Profil from './components/Header/index'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN ? process.env.REACT_APP_TOKEN : "a9a49756dde1e2a293a43e64e6adc42bbba7d0db"
      }`,
      },
    });
  },
});

const GET_USER_INFOS = gql`
  query {
    viewer {
      avatarUrl
    }
  }
`;

client.query({ query: GET_USER_INFOS }).then(result => {
  console.log(result)
}).catch(error => {
  console.log(process.env.REACT_APP_TOKEN);
  console.log(error)
} )

function App() {
  return (
    <ApolloProvider client={client}>
      <Profil/>
      {/* <div>
        <h2>My first Apollo app 🚀</h2>
      </div> */}
    </ApolloProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

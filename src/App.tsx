import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN ?process.env.REACT_APP_TOKEN : "14b0765fef7767d62b8184c3fa8c8fa39bc9e4c7"
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

const POPULAR_REPOSITORIES_LIST = gql`
{
  search(type: REPOSITORY, first: 10) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          name
          owner {
            login
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
}
`

client.query({ query: GET_USER_INFOS }).then(result => {
  console.log(result)
}).catch(error => {
  console.log(process.env.REACT_APP_TOKEN);
  console.log(error)
} )


// client
//   .query({
//     query: GET_USER_INFOS
//   })
//   .then(result => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
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

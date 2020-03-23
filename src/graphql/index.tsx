import { gql } from "apollo-boost";

export const PROFIL = gql`
    query {
        viewer {
            id
            login
            name
            location
            avatarUrl(size: 150)
            bio
            following {
                totalCount
            }
            followers {
                totalCount
            }
            repositories {
                totalCount
            }
            websiteUrl
        }
    }
`;

export const LANGUAGES = gql`
    query {
        viewer {
        id
        repositories(first: 100) {
            totalCount
            edges {
            node {
                languages(first: 100) {
                totalCount
                nodes {
                    name
                    color
                }
                }
            }
            }
        }
        }
    }
  `;



export const REPO = gql`
query {
    viewer {
      id
      repositories(first: 30) {
        totalCount
        edges {
          cursor
          node {
            name
            description
            languages(first: 100) {
              nodes {
                color
                name
              }
              totalCount
            }
            primaryLanguage {
              name
              color
              id
            }
          }
        }
      }
    }
  }
`;
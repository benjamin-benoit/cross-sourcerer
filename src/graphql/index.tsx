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
        repositories(first: 100) {
            totalCount
            nodes {
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
  `;



export const LANGUAGES_ID = gql`
    query {
        viewer {
        repositories(first: 100) {
            totalCount
            edges {
            repository: node {
                id
                ... on Repository {
                id
                languages(first: 100) {
                    totalCount
                    nodes {
                    id
                    name
                    color
                    }
                }
                }
            }
            }
        }
        }
    }
`;
import { QueryHookOptions, MutationHookOptions, useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Profil } from '../types/index';

interface GetProfilPayload {}

interface GetProfilResponse {
  profil: Profil;
}

export const PROFIL = gql`
    query {
        viewer {
            id
            login
            name
            location
            avatarUrl(size: 150)
            bio
        }
    }
`;

export const getProfilQuery = (options: QueryHookOptions<GetProfilResponse, GetProfilPayload>) => useQuery(PROFIL, options);
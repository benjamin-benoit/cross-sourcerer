import React, { Component } from 'react'
import { PROFIL } from '../../graphql/index';
import { Profil } from '../../types/index';
import { useQuery } from '@apollo/react-hooks';

const Header = () => {
  const { data, loading, error } = useQuery(PROFIL, {
    variables: { }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <img src={data.profil.avatarUrl} alt="Logo" />
    </div>
  );
};

// const Header = () => {
//   const { data, error, loading } = getProfilQuery({
//     variables: {},
//   });

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (error || !data) {
//     return <div>Error!!</div>
//   }

//   return <div>
//     <img src={data.profil.avatarUrl} alt="Logo" />
//   </div>;
// }

// export default function Profil(props: ProfilProps) {
//   const { loading, data, error } = getProfilQuery({
//     variables: {},
//   });

//   function renderProfil(profil: Profil) {
//     return <div key={profil.id}></div>;
//   }

//   return <div>{data?.profil && <FlatList data={data?.profil} keyExtractor={profil => profil.id} renderItem={({ item: profil }) => renderProfil(profil)} />}</div>;
// }

export default Header
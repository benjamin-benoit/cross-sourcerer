import React, { Component } from 'react'
import { getProfilQuery } from '../../graphql/index';
import { Profil } from '../../types/index';

const Profil = () => {
  const { data, error, loading } = getProfilQuery();

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error!!</div>
  }

  return <div data={data}/>;
}

// export default function Profil(props: ProfilProps) {
//   const { loading, data, error } = getProfilQuery({
//     variables: {},
//   });

//   function renderProfil(profil: Profil) {
//     return <div key={profil.id}></div>;
//   }

//   return <div>{data?.profil && <FlatList data={data?.profil} keyExtractor={profil => profil.id} renderItem={({ item: profil }) => renderProfil(profil)} />}</div>;
// }

// export default Profil
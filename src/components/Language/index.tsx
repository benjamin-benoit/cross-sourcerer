import React from 'react'
import { LANGUAGES } from '../../graphql/index';
import { useQuery } from '@apollo/react-hooks';
import { Container, Row, Col } from 'react-bootstrap';import { gql } from "apollo-boost";


// interface LanguageInterface {
//   search: {
//     edges: Array<{ language: Language }>;
//   };
// }

const Language = () => {

  const { data, loading, error } = useQuery(LANGUAGES, {
    variables: { }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  
  return (
  <Container className="language">
    <Row>
      <Col className="blockTitle">Languages</Col>
    </Row>
    <span>{data?.viewer.repositories.totalCount}</span><br/>
      {data?.viewer.repositories.edges.map((edge: any) => {
        return edge.node.languages.nodes.map((node: any, index: number) => {
          return(
            <div key={index}>
              <span>{node.name}</span>
            </div>
          );
        })
      })}
  </Container>
  )};

export default Language
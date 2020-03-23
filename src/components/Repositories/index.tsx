import React from 'react'
import { REPO } from '../../graphql/index';
import { useQuery } from '@apollo/react-hooks';
import { Container, Card, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// interface LanguageInterface {
//   search: {
//     edges: Array<{ language: Language }>;
//   };
// }

const Language = () => {

  const { data, loading, error } = useQuery(REPO, {
    variables: { }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  
  return (
  <Container>
    <Row>
      <Col className="blockTitle">Repositories</Col>
    </Row>
      {data?.viewer.repositories.edges.map((edge: any) => { 
        console.log(edge)
        return(
        <Card className="repoStyle">
          <Card.Title>{edge.node.name}</Card.Title>
          <Card.Text>{edge.node.description ? "Description: " + edge.node.description : ""}</Card.Text>
        {
        edge.node.languages.nodes.map((node: any, index: number) => {
          return(
            <div key={index}>
              <div className="bg-light text-dark border p-2 mt-1 d-inline-block"><span className="dot" style={{ background: node.color}} ></span>{node.name}</div>
            </div>
          );
        })
      }
        </Card>
      );
      })}
  </Container>
  )};

export default Language
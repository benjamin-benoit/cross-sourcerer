import React from 'react'
import { LANGUAGES_ID } from '../../graphql/index';
import { useQuery } from '@apollo/react-hooks';
import { Container, Row, Col } from 'react-bootstrap';

// interface LanguageInterface {
//   search: {
//     edges: Array<{ language: Language }>;
//   };
// }

const Language = () => {

  const { data, loading, error } = useQuery(LANGUAGES_ID, {
    variables: { }
  });

  if (data)(
    console.log(data)
  ) 

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  
  return (
  <Container>
    <Row>
      {/* {data?.map(
        <Col className="blockTitle"></Col>
      )} */}
    </Row>
  </Container>
  )};

export default Language
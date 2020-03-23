import React from 'react'
import { PROFIL } from '../../graphql/index';
import { useQuery } from '@apollo/react-hooks';
import { Container, Row, Col } from 'react-bootstrap';

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
  <Container>
    <Row>
      <Col className="blockTitle">GitHub of {data.viewer.name}</Col>
    </Row>
    <Row className="profilHeader">
      <Col xs="auto"><img src={data.viewer.avatarUrl} alt="Logo" className="avatarRound"/></Col>
      <Col className="username">{data.viewer.login}</Col>
    </Row>
    <Row className="profilBoxes">
      {/* <Col>Commits: {data.viewer.repositories.defaultBranchRef.target.history.totalCount}</Col> */}
      <Col>Repos: {data.viewer.repositories.totalCount}</Col>
      <Col>Lines of code: {data.viewer.following.totalCount}</Col>
      <Col>Followers: {data.viewer.following.totalCount}</Col>
      <Col>Following: {data.viewer.followers.totalCount}</Col>
      <Col>Refresh</Col>
    </Row>
  </Container>
  )};

export default Header
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

class ContainerBootstrapDemo extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={6} style={{ backgroundColor: 'red' }}>
            First row, first column
          </Col>
          <Col xs={6} style={{ backgroundColor: 'green' }}>
            First row, first column
          </Col>
        </Row>
        <Row>
          <Col xs={6} style={{ backgroundColor: 'orange' }}>
            Second row, first column
          </Col>
          <Col xs={6} style={{ backgroundColor: 'pink' }}>
            Second row, second column
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContainerBootstrapDemo;

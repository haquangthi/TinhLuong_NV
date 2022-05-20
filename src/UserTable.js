import React from 'react';
import { Table, Button, Container, Row, Col, Form } from 'react-bootstrap';

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filter: {
        username: '',
        name: '',
      },
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => this.setState({ users: json }));
  }
  showAddress(e) {
    const userId = parseInt(e.currentTarget.getAttribute('value'));
    for (let i = 0; i < this.state.users.length; i++) {
      if (userId === this.state.users[i].id) {
        alert(JSON.stringify(this.state.users[i].address));
      }
    }
  }
  filterChange(e) {
    const userNameTxt = e.currentTarget.value;
    const filter = { username: userNameTxt };
    this.setState({ filter: filter });
  }
  render() {
    let users = this.state.users;
    if (this.state.filter.username !== '') {
      users = this.state.users.filter((user) => {
        return user.username
          .toLowerCase()
          .includes(this.state.filter.username.toLowerCase());
      });
    }
    return (
      <Container>
        <Row>
          <Col xs={3}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(e) => this.filterChange(e)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Table striped bordered hover variant="dark">
            <thead>
              <td> ID </td>
              <td> Username </td>
              <td> Name </td>
              <td> Email </td>
              <td> Actions </td>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td> {user.id} </td>
                    <td> {user.username} </td>
                    <td> {user.name} </td>
                    <td> {user.email} </td>
                    <td>
                      <Button
                        size="sm"
                        value={user.id}
                        onClick={(e) => this.showAddress(e)}
                      >
                        View Address
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}
export default UserTable;

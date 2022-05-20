import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Row, Col, Form, Tabs, Tab, Nav, TabContainer, TabPane , TabContent } from 'react-bootstrap';

class SanPham_NV extends React.Component {
    

    render() {
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Sonnet />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Sonnet />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
}
export default SanPham_NV;
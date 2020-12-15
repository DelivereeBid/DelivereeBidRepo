import React from "react";
import { Container, Card, Button, Col, Row, Image } from "react-bootstrap";
import { NavbarTrans } from '../../components'

function Wallet(props) {
  return (
    <>
    <NavbarTrans/>
      <Container style={{ marginTop: 100 }}>
        <Row>
          <Col xs={6} md={6}>
            <Card
              style={{
                border: "primary",
                borderStyle: "rounded",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  Ini wallet
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={6}>
            <Card
              style={{
                border: "primary",
                borderStyle: "rounded",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  Ini Pembayaran
                </Card.Title>
                <Card.Footer>
                <Button style={{marginLeft: 180}} variant="primary">Checkout</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Wallet;

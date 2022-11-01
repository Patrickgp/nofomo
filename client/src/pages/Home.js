import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Button, Nav, Stack, Modal, Tab } from "react-bootstrap";
import Auth from "../utils/auth";
import SignUpForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

import { useSelector } from "react-redux";

import { useState } from "react";
import StripeContainer from "../components/StripeContainer";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const Home = () => {
  const [showItem, setShowItem] = useState(false);
  const { items: productData, status } = useSelector((state) => state.products);
  const [showModal, setShowModal] = useState(false);

  const { data } = useQuery(QUERY_ME);
  const userdata = data?.me || {};

  return (
    <>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <div>
            <h3 className="featureHeader">All Available Items</h3>

            <div className="listingContainer mt-4">
              {status === "success" ? (
                <div className="test d-flex justify-content-center flex-wrap mx-5">
                  {productData &&
                    productData?.map((product) => (
                      <div key={product._id} className="product">
                        <Card
                          className="bg-dark text-light mx-3 mt-3"
                          style={{ width: 300 }}
                        >
                          <Card.Img
                            src={product.image?.url}
                            alt={product.title}
                          />
                          <Card.ImgOverlay>
                            <Card.Text>
                              {Auth.loggedIn() ? (
                                <>
                                  {product.username === userdata.username ? (
                                    <Button
                                      style={{
                                        position: "absolute",
                                        right: 5,
                                        bottom: 5,
                                        border: "none",
                                        zIndex: 999,
                                        cursor: "not-allowed",
                                      }}
                                      className="text-danger bg-dark"
                                    >
                                      Cannot Book
                                    </Button>
                                  ) : (
                                    <></>
                                  )}
                                  <Button
                                    style={{
                                      position: "absolute",
                                      right: 5,
                                      bottom: 5,
                                      border: "none",
                                    }}
                                    variant="primary"
                                    className="bg-success"
                                    onMouseDown={() =>
                                      localStorage.setItem(
                                        "price",
                                        product.price * 100
                                      )
                                    }
                                    onMouseUp={() => setShowItem(true)}
                                  >
                                    Rent Now
                                  </Button>
                                </>
                              ) : (
                                <Button
                                  style={{
                                    position: "absolute",
                                    left: 10,
                                    bottom: 10,
                                    border: "none",
                                  }}
                                  variant="primary"
                                  className="bg-success"
                                  onClick={() => setShowModal(true)}
                                >
                                  Please sign in to access pricing
                                </Button>
                              )}
                            </Card.Text>
                          </Card.ImgOverlay>
                          <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text className="d-flex text-light">
                              ${product.price} / Daily
                            </Card.Text>
                            <Card.Text className="d-flex text-light mb-5 text-center">
                              {product.description}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                </div>
              ) : status === "pending" ? (
                <p>Loading...</p>
              ) : (
                <p>No items found.</p>
              )}
            </div>
          </div>
        </>
      )}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link
                    eventKey="login"
                    style={{ backgroundColor: "#558C8F", marginRight: 10 }}
                    active={{ color: "#558C8F", backgroundColor: "white" }}
                  >
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="signup"
                    style={{ backgroundColor: "#558C8F" }}
                    active={{ color: "#558C8F", backgroundColor: "white" }}
                  >
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default Home;

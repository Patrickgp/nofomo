import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Button, Stack } from "react-bootstrap";

import { useSelector } from "react-redux";

import { useState } from "react";
import StripeContainer from "../components/StripeContainer";

const Home = () => {
  const [showItem, setShowItem] = useState(false);
  const { items: productData, status } = useSelector((state) => state.products);

  return (
    <>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <div>
            <h3 className="featureHeader">Featured Items</h3>
            <Carousel className="bg-dark featuredItem">
              <Carousel.Item>
                <Stack
                  direction="horizontal"
                  className="justify-content-center align-items-center"
                  gap={4}
                >
                  <div className="listingContainer mt-4">
                    {status === "success" ? (
                      <div className="test d-flex justify-content-center">
                        {productData &&
                          productData?.map((product) => (
                            <div key={product._id} className="product">
                              <Card
                                className="bg-dark text-light mx-3"
                                style={{ width: 300 }}
                              >
                                <Card.Img
                                  src={product.image?.url}
                                  alt={product.title}
                                />
                                <Card.ImgOverlay>
                                  <Card.Text>
                                    <Button
                                      style={{
                                        position: "absolute",
                                        right: 5,
                                        bottom: 5,
                                        border: "none",
                                      }}
                                      variant="primary"
                                      className="bg-success"
                                      onClick={() =>
                                        localStorage.setItem(
                                          "price",
                                          product.price * 100
                                        ) && setShowItem(true)
                                      }
                                    >
                                      Available
                                    </Button>
                                  </Card.Text>
                                </Card.ImgOverlay>
                                <Card.Body>
                                  <Card.Title>{product.title}</Card.Title>
                                  <Card.Text className="d-flex text-light">
                                    ${product.price} / Daily
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
                </Stack>
              </Carousel.Item>
            </Carousel>
          </div>
        </>
      )}
    </>
  );
};

export default Home;

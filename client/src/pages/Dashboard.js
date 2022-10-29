import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import UploadWidget from "../components/UploadWidget";

import Quad from "../assets/quad.webp";
import Kayak from "../assets/kayak.jpeg";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const userdata = data?.me || {};

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div className="dashboard">
      {Auth.loggedIn() ? (
        <>
          <section className="dashboard">
            <div className="container">
              <div className="row">
                <h3
                  style={{
                    color: "#558c8f",
                    padding: 25,
                  }}
                >
                  {userdata.username}'s User Dashboard
                </h3>
              </div>

              <div className="myItems mb-5">
                <NavLink to="/itemUpload">Post an Item</NavLink>
                <UploadWidget />
              </div>

              <div className="row">
                <h3>My Listings</h3>

                <Card className="bg-light mt-5" style={{ width: 300 }}>
                  <Card.Img
                    src={Quad}
                    style={{
                      width: "100%",
                      display: "flex",
                    }}
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                    <Card.Text>
                      ß
                      <Button
                        style={{
                          position: "absolute",
                          right: 5,
                          bottom: 5,
                          border: "none",
                        }}
                        variant="primary"
                        className="bg-danger"
                      >
                        Rented
                      </Button>
                    </Card.Text>
                  </Card.ImgOverlay>
                  <Card.Body>
                    <Card.Title>{}</Card.Title>
                    <Card.Text>{}</Card.Text>
                  </Card.Body>
                </Card>

                <Card className="bg-light mt-5" style={{ width: 300 }}>
                  <Card.Img src={Kayak} alt="Card image" />
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
                      >
                        Available
                      </Button>
                    </Card.Text>
                  </Card.ImgOverlay>
                  <Card.Body>
                    <Card.Title>{}</Card.Title>
                    <Card.Text>{}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="row">
                <h3>My Reviews</h3>
              </div>
            </div>
          </section>
        </>
      ) : (
        <h3>Please sign in to access the User Dashboard</h3>
      )}
    </div>
  );
};

export default Dashboard;

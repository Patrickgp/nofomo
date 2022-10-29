import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Button, Stack } from "react-bootstrap";
import ElectricBike from "../assets/ElectricBike.webp";
import Kayak from "../assets/kayak.jpeg";
import Mixer from "../assets/mixer.webp";
import PatioHeater from "../assets/patioHeater.webp";
import TableSaw from "../assets/tablesaw.jpeg";
import Tent from "../assets/tent.webp";
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";


const Home = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dk05bpck6'
    }
  });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image('samples/sheep'); 

    // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));


  return (
    <>
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
      <h3 className="featureHeader">Featured Items</h3>
      <Carousel className="bg-dark featuredItem">
        <Carousel.Item>
          <Stack
            direction="horizontal"
            className="justify-content-center align-items-center"
            gap={4}
          >
            <Card className="bg-light mt-5" style={{ width: 300 }}>
              <Card.Img src={Tent} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text>
                  <Button
                    style={{ position: "absolute", right: 5, bottom: 5 }}
                    variant="primary"
                  >
                    Rent Now
                  </Button>
                </Card.Text>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>{/*price*/}</Card.Title>
                <Card.Text>{}</Card.Text>
              </Card.Body>
            </Card>

            <Card className="bg-light mt-5" style={{ width: 300 }}>
              <Card.Img src={ElectricBike} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text>
                  <Button
                    style={{ position: "absolute", right: 5, bottom: 5 }}
                    variant="primary"
                  >
                    Rent Now
                  </Button>
                </Card.Text>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>{/*price*/}</Card.Title>
                <Card.Text>{}</Card.Text>
              </Card.Body>
            </Card>
          </Stack>
        </Carousel.Item>

        <Carousel.Item>
          <Stack
            direction="horizontal"
            className="justify-content-center align-items-center"
            gap={4}
          >
            <Card
              className="bg-light mt-5 featuredItemCard"
              style={{ width: 300 }}
            >
              <Card.Img src={Kayak} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text>
                  <Button
                    style={{ position: "absolute", right: 5, bottom: 5 }}
                    variant="primary"
                  >
                    Rent Now
                  </Button>
                </Card.Text>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>{/*price*/}</Card.Title>
                <Card.Text>{}</Card.Text>
              </Card.Body>
            </Card>

            <Card className="bg-light mt-5" style={{ width: 300 }}>
              <Card.Img src={Mixer} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text>
                  <Button
                    style={{ position: "absolute", right: 5, bottom: 5 }}
                    variant="primary"
                  >
                    Rent Now
                  </Button>
                </Card.Text>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>{/*price*/}</Card.Title>
                <Card.Text>{}</Card.Text>
              </Card.Body>
            </Card>
          </Stack>
        </Carousel.Item>

        <Carousel.Item>
          <Stack
            direction="horizontal"
            className="justify-content-center align-items-center"
            gap={4}
          >
            <Card
              className="bg-light mt-5 featuredItemCard"
              style={{ width: 300 }}
            >
              <Card.Img src={PatioHeater} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text>
                  <Button
                    style={{ position: "absolute", right: 5, bottom: 5 }}
                    variant="primary"
                  >
                    Rent Now
                  </Button>
                </Card.Text>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>{/*price*/}</Card.Title>
                <Card.Text>{}</Card.Text>
              </Card.Body>
            </Card>

            <Card className="bg-light mt-5" style={{ width: 300 }}>
              <Card.Img src={TableSaw} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text>
                  <Button
                    style={{ position: "absolute", right: 5, bottom: 5 }}
                    variant="primary"
                  >
                    Rent Now
                  </Button>
                </Card.Text>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>{/*price*/}</Card.Title>
                <Card.Text>{}</Card.Text>
              </Card.Body>
            </Card>
          </Stack>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;

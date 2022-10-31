import React from "react";
import Card from "react-bootstrap/Card";

const Categories = () => {
  const [categories] = useState([
    { name: 'camping', description: 'Tents, camp chairs, coolers' },
    { name: 'vehicles', description: 'ATVS, RVs, boats, bikes' },
    { name: 'electronics', description: 'Gaming systems, music equipment, tools' },
    { name: 'kitchen-grilling', description: 'Grills, smokers, small kitchen appliances' },
    { name: 'miscellany', description: 'Sporting equipment, party supplies, etc.' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Link href="#">Camping Gear</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Link href="#">Vehicles</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Link href="#">Electronics</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Link href="#">Kitchen and Grilling</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Link href="#">Miscellany</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Categories;

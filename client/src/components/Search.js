import React from 'react';
import ElectricBike from "../assets/images"

const Search = ()=>{
    return(
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={ElectricBike} />
        <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <button>Rent Now!</button>
        </Card.Body>
      </Card>
    )
}

export default Search;
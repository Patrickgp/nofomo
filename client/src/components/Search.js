import React from 'react';
import ElectricBike from "../assets/images"

// adding comment to push to Github again
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
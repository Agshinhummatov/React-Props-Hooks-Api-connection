import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product1 from '../../assets/img/product1.jpg'





function Product(props) {
  return (
    <div>
       
       <div className='container'>

       
      <div className='d-flex mt-3'>

      
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product1} />
          <Card.Body>
            <Card.Title>{props.productName}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

       





      </div>

      </div>


    </div>
  )
}

export default Product
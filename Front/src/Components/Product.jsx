import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Product(){
    return(
        <div>    <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhTFItQj80WVM8dZZC2tsek-PEWU8lTmXSQ&usqp=CAU" />
        <Card.Body>
          <Card.Title>G0nd0m</Card.Title>
          <Card.Text>
            Price: 69
            stock: 5
            category: sport
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card></div>
    )
}

export default Product
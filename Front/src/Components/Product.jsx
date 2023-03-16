import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product(data) {
  return (
    <div>
      <Card style={{ width: "16em" }}>
        <Card.Img variant="top" style={{height:"100px"}} src={data.data.image} />
        <Card.Body>
          <Card.Title>{data.data.name}</Card.Title>
          <Card.Text>
            Price: {data.data.price}
          <br />
            stock: {data.data.count}
          <br />
            category: {data.data.category}
          </Card.Text>
          <Button variant="primary">Order</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;

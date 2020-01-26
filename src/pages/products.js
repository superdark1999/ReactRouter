import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Chocolate - Dark",
          description:
            "dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: 2,
          name: "Bag - Bread, White, Plain",
          description:
            "vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: 3,
          name: "Muffin - Mix - Strawberry Rhubarb",
          description:
            "neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: 4,
          name: "Sansho Powder",
          description:
            "posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: 5,
          name: "Snapple Lemon Tea",
          description:
            "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: 6,
          name: "Beef Flat Iron Steak",
          description:
            "sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: 7,
          name: "Mudslide",
          description:
            "porta volutpat erat quisque erat eros viverra eget congue eget semper",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: 8,
          name: "Pie Shell - 9",
          description:
            "elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
        },
        {
          id: 9,
          name: "Myers Planters Punch",
          description:
            "nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: 10,
          name: "Wine - Pinot Noir Mondavi Coastal",
          description:
            "est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat",
          imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: 11,
          name: "Wine - Kwv Chenin Blanc South",
          description:
            "non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan",
          imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
        },
        {
          id: 12,
          name: "Island Oasis - Pina Colada",
          description:
            "neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: 13,
          name: "Mustard - Dijon",
          description:
            "risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: 14,
          name: "Versatainer Nc - 8288",
          description:
            "augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: 15,
          name: "Knife Plastic - White",
          description:
            "turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: 16,
          name: "Potatoes - Peeled",
          description:
            "bibendum morbi non quam nec dui luctus rutrum nulla tellus in",
          imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: 17,
          name: "Chocolate Bar - Oh Henry",
          description:
            "eros elementum pellentesque quisque porta volutpat erat quisque erat eros",
          imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: 18,
          name: "Muffin - Mix - Creme Brule 15l",
          description:
            "sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi",
          imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: 19,
          name: "Broom - Angled",
          description:
            "in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat",
          imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: 20,
          name: "External Supplier",
          description:
            "posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat",
          imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        }
      ]
    };
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <Row>
          {products.map(product => (
            <Col sm="4">
              <Card>
                <CardImg top width="100%" src={product.imageUrl} />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <Button>Add to cart</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;

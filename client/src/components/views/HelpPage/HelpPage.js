import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { ListGroup, ListGroupItem, Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <br />
          <h3>HELP-</h3>
          <br />
          <h6>내 애완식물에게는 어떤 환경이 어울릴까?</h6>
          <br />
          <hr /><br />
          <h5>CTRL + F 를 눌러 내 식물을 검색해보세요!</h5>
          <br />
        </Container>
      </Jumbotron>

      <ListGroup>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <br />
      <ListGroupItem display = "center">!-- 식물들의 정보는 계속 업데이트 되고 있습니다! 자신의 식물정보가 없다면 하단 이메일로 문의주세요 --!</ListGroupItem>
    </ListGroup>
    <div className="p-3 bg-warning my-2 rounded">
              <Row>
            <Col sm="6">
              <Card body>
                <CardTitle tag="h5">CALL</CardTitle>
                <CardText><a href = "tel: 01021687553">010-2168-7553</a></CardText>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle tag="h5">E-MAIL</CardTitle>
                <CardText><a href = "mailto: jya2005973@student.hywoman.ac.kr">jya2005973@student.hywoman.ac.kr</a></CardText>
              </Card>
            </Col>
          </Row>
      </div>
    </div>
    
  );
};
export default Example;
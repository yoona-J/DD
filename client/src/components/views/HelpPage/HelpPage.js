import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">HELP-</h1>
          <p className="lead">내 애완식물에게는 어떤 환경이 어울릴까?</p>
          <hr />
          <p className="lead">CTRL + F 를 눌러 내 식물을 검색해보세요!</p>
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
      <br />
      <ListGroupItem display = "center">-- 식물들의 정보는 계속 업데이트 되고 있습니다! 자신의 식물정보가 없다면 하단 이메일로 문의주세요 --</ListGroupItem>
    </ListGroup>
    </div>
  );
};
export default Example;
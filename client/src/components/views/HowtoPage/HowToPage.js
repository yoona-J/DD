import React from 'react';
import { Jumbotron, Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <br />
        <h3>HOW TO-</h3>
        <br />
        <h6>스마트팜을 처음 사용해보는 당신에게-</h6>
        <br />
        <hr className="my-2" />
        <br />
        <h4>WHAT IS SMART-FARM?</h4>
        <br /> 
        <p>누구나 한번쯤 식물을 키워 본 경험이 있을 것입니다.</p>
        <p>그것이 화분일 수도 있고, 식재료일 수 있습니다.</p>
        <br />
        <p>4차 산업혁명이 진행되면서 IOT 관련 물품들이 급증하고 있습니다.</p>
        <br />
        <p>그 중 스마트팜(smart-farm)은 ICT 기술이 농업에 접목되어 농작물의 상태를 실시간으로 인터넷으로 확인할 수 있는 원격제어 지능형 시스템이 구축된 농장입니다.</p>
        <p>전 세계 어디서든 인터넷만 연결되어있다면 내 농장 상태를 확인하고 제어할 수 있으며, 이로 인해 농민들의 활동 범위가 넓어지게 되죠.</p>
        <p>작물들의 생육 환경을 빅데이터를 이용하여 좀 더 좋은  생산성과 더욱 높은 품질을 향상시킬 수 있는 기술인 것입니다.</p>
        <br />
        <p>스마트팜은 현재 2%의 농가만이 사용중입니다.</p>
        <p>그 이유는 품목과 농장 규모에 맞는 ICT 장비가 부족하고 초기 비용이 부담되며 아직은 딸기, 토마토, 화훼 농가 등 일부 농사에만 적용이 가능하기 때문입니다.</p>
        <br />
        <p>이러한 기술을 이용해 아두이노로 IOT 미니 스마트팜을 만들어 우리의 작은 농장을 좀 더 쉽고 편하게 기를 수 있도록 제작한 것이 BROWN-THUMB의 미니 스마트팜입니다.</p>
        <br />
        <p className="lead">
        </p>

        <hr />
        <br />
        <h4>HOW CAN WE USE?</h4>
        <br />
        <p>1. 메인 페이지 오른쪽 하단에 위치한 미니 스마트팜 추가하기 버튼을 눌러주세요.</p>
        <p>2. 자신이 가지고 있는 해당 스마트팜의 일련 코드번호를 입력해 검색해주세요.</p>
        <p>3. 해당 스마트팜에 이름을 넣어주면 자동적으로 오른쪽 상태 부분에 나타나게 됩니다.</p>
        <br />
        <p>등록된 스마트팜의 온습도 확인, LED 전등, 스프링클러, 천장 개폐장치 on/off 버튼은 모두 wifi 통신으로 이루어집니다.</p>
        <br />
        <hr className="my-2" />
        <br />
        <h4>! TIP !</h4>
        <br />
        <p>등록된 모든 기기는 온습도 설정이 기본으로 되어있습니다.</p>
        <p>(온도 : 최저 21도, 최고 25도 / 습도 : 최저 40%, 최고 70%)</p>
        <br />
        <p>help 메뉴에서 자신의 식물을 검색해보고 자신의 식물에 맞는 온습도로 바꿔주세요!</p>
        <p className="lead">
        </p>
      </Jumbotron>
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
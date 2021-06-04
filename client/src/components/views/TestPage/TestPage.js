import '../../../App.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert } from 'reactstrap';
// L34
import { withRouter } from 'react-router-dom'
//import { get } from 'mongoose';
//import { response } from 'express';
import Weather from '../../Weather';

import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';

function TestPage(props) {

  const onClickHandler = () => {
    axios.get('/api/users/logout')
        .then(response => {
            //console.log(response.data)
            
            if(response.data.success) {
                props.history.push("/")
            } else {
                alert('logOut 하는데 실패 했습니다.')
            }
        })
  }

  const openHandler = () => {
    let body = {
        servo: 1
    }
    axios.post ('/api/users/servo', body)
    .then(response => response.data)
  }

  const closeHandler = () => {
    let body = {
        servo: 2
    }
    axios.post ('/api/users/servo', body)
    .then(response => response.data)
  }

  const onCoolerHandler = () => {
      let body = {
        cooler: 1
    }
    axios.post ('/api/users/cooler', body)
    .then(response => response.data)
  }

  const offCoolerHandler = () => {
      let body = {
        cooler: 2
      }
      axios.post ('/api/users/cooler', body)
      .then(response => response.data)
  }

  const onLedHandler = () => {
    let body = {
      led: 1
    }
    axios.post ('/api/users/led', body)
    .then(response => response.data)
  }

  const offLedHandler = () => {
    let body = {
      led: 2
    }
    axios.post ('/api/users/led', body)
    .then(response => response.data)
  }

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

    return (
      <div>
        <br />
      <Alert color="warning">
      LIVING_FARM 의 습도가 40 이하로 떨어졌습니다. 스프링클러를 켜주세요.
      </Alert>

      <Weather />
      <br />

      <Alert color="warning">
      TIP - 오늘은 개폐장치를 열고 밖에 식물들을 내놓아도 좋은 날씨에요!
      </Alert>

        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                천장개폐장치
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                스프링클러
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => { toggle('3'); }}
              >
                LED
              </NavLink>
            </NavItem>

          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                <Button outline color="primary" onClick={openHandler}>   ON   </Button>{' '}
                <Button color="info" onClick={closeHandler}>   OFF   </Button>{' '}

                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                <Button outline color="primary" onClick={onCoolerHandler}>   ON   </Button>{' '}
                <Button color="info" onClick={offCoolerHandler}>   OFF   </Button>{' '}
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                <Button outline color="primary" onClick={onLedHandler}>   ON   </Button>{' '}
                <Button color="info" onClick={offLedHandler}>   OFF   </Button>{' '}
                </Col>
              </Row>
            </TabPane>

          </TabContent>
        </div>

          <br />
        <button onClick={onClickHandler}>
                LOG-OUT
        </button>
    </div>
    
    )
}

export default withRouter(TestPage);

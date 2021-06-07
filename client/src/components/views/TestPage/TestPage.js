import '../../../App.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert } from 'reactstrap';
// L34
import { withRouter } from 'react-router-dom'
import Weather from '../../Weather';

import { Button, Card, CardTitle, CardGroup, CardBody} from 'reactstrap';
//import classnames from 'classnames';

function TestPage(props) {

  //button event - logout, servo, cooler, led
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
          <Alert color="warning">
            LIVING_FARM 의 습도가 40 이하로 떨어졌습니다. 스프링클러를 켜주세요.
          </Alert>

        <Alert color="primary">
        <Weather />
        </Alert>

        <Alert color="warning">
          TIP - 오늘은 개폐장치를 열고 밖에 식물들을 내놓아도 좋은 날씨에요!
        </Alert>

        <div>
          <CardGroup>
            <Card>
              <CardBody>
                <CardTitle tag="h5">천장개폐장치</CardTitle>
                <Button outline color="primary" onClick={openHandler}>   ON   </Button>{' '}
                <Button color="info" onClick={closeHandler}>   OFF   </Button>{' '}
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle tag="h5">스프링클러</CardTitle>
                <Button outline color="primary" onClick={onCoolerHandler}>   ON   </Button>{' '}
                <Button color="info" onClick={offCoolerHandler}>   OFF   </Button>{' '}
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle tag="h5">LED</CardTitle>
                <Button outline color="primary" onClick={onLedHandler}>   ON   </Button>{' '}
                <Button color="info" onClick={offLedHandler}>   OFF   </Button>{' '}
              </CardBody>
            </Card>
          </CardGroup>
          <br />
          <Alert color="success">
            <h4 className="alert-heading">MY OWN SMART FARM</h4>
            <hr />
              <p>
              미니 스마트팜 추가하기
              </p>  
            <Button color="success" href = "/plus">PLUS</Button>{' '}
          </Alert>
        </div>
          <br />
          <Button color="warning" onClick={onClickHandler}>
            LOG-OUT
          </Button>{' '}
    </div>
    
    )
}

export default withRouter(TestPage);

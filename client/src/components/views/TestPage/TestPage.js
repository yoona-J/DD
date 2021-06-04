import '../../../App.css';
import axios from 'axios';
import React from 'react';
import { Alert } from 'reactstrap';
// L34
import { withRouter } from 'react-router-dom'
//import { get } from 'mongoose';
//import { response } from 'express';
import Weather from '../../Weather';

function TestPage(props) {
  console.log(1)

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
          <br />
        <button onClick={onClickHandler}>
                LOG-OUT
        </button>
    </div>
    
    )
}

export default withRouter(TestPage);

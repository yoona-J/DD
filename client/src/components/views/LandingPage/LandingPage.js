// L21 수정
import React, { useEffect } from 'react';
// L21
import axios from 'axios';
// L34
import { withRouter } from 'react-router-dom';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';



function LandingPage(props) {



    // L21
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => console.log(response.data))
    }, [])



    // L31 - button event

    // const onClickHandler = () => {
    //     axios.get('/api/users/logout')
    //         .then(response => {
    //             //console.log(response.data)
                
    //             if(response.data.success) {
    //                 props.history.push("/login")
    //             } else {
    //                 alert('logOut 하는데 실패 했습니다.')
    //             }
    //         })
    // }


    // L27, L31-로그아웃 버튼 생성
    // return (
    //     <div style={{
    //         display: 'flex', justifyContent: 'center', alignItems: 'center'
    //         , width: '100%', height: '100vh'
    //     }}>
    //         <h2>BROWN_THUMB</h2>
    //         <br />
    //             <button onClick={onClickHandler}>
    //                 로그인
    //             </button>
    //     </div>
    // )
        return (
            <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                    , width: '100%', height: '100vh'
                }}>
            <h2>welcome to our
                <br />
                smart-farm</h2>
                <br />
            <Link to = "./login">
                <Button color="success">LOGIN</Button>{' '}
            </Link>
            <br />
            <Link to = "./register">
                <Button color="warning">JOIN</Button>{' '}
            </Link>
            {/* <button onClick={onClickHandler}>
                로그인
            </button> */}
          </div>
        );
      }      
export default withRouter(LandingPage);

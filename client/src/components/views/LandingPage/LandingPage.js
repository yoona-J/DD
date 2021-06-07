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
          </div>
        );
      }      
export default withRouter(LandingPage);

import '../../../App.css';

import React from 'react';
import { Alert } from 'reactstrap';
// L34
import { withRouter } from 'react-router-dom'
 
function TestPage(props) {
    return (
      <div>
      <Alert color="warning">
        This is a warning alert — check it out!
      </Alert>

        <h2>BROWN_THUMB</h2>
          <br />
    </div>
    )
}

export default withRouter(TestPage)

import React from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer'

export default function Details() {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();

  console.log({location});

  return (
    <React.Fragment>
      <Drawer
        anchor='right'
        open={true}
        onClose={() => history.push('/')}
      >
        <div style={{ width: '500px', padding: '15px' }}>
          <h1>Details Page!!!</h1>
          {/* location state was not sent for some reason... */}
          {/* <h2>{location.state.description}</h2> */}
          <p>id: {id}</p>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

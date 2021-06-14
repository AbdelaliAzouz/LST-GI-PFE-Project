import React from 'react'
import { Link, Redirect, useHistory, Route   } from 'react-router-dom';


function ProtectedRoue({loggedIn : loggedIn, component: Component, ...rest}) {
    return (
        <Route
        {...rest}
        render={(props) => {
            if (loggedIn){
                return <Component/>;
            }else{
                return <Redirect to={{pathname: '/', state: {from: props.location}  }}/>;
            }
        }}
        >

        </Route>
    )
}

export default ProtectedRoue

import React from 'react';
import { Navbar, Button} from "react-bootstrap"
import Login from "../Login/Login"
import Logout from '../Logout/Logout';
import RequestForm from '../Request-Form/RequestForm';
import Signup from '../Signup/Signup';
import TimeHistory from '../Time-History/TimeHistory';
import { useIsAuthenticated } from "../../utils/auth";

function NavButton () {

    const [modalLogin, setModalLogin] = React.useState(false);
    const [modalSignup, setModalSignup] = React.useState(false);
    const isAuthenticated = useIsAuthenticated();

    return (

        <Navbar className="d-flex justify-content-between" bg="dark" variant="dark">

            {/* Log in and Signup button to open the form */}
            <div className="RegisteringButtons">

                {/* Log In button function */}
                {!isAuthenticated && <Button variant="light outline-info" className="ml-2" onClick={() => setModalLogin(true)}>
                    Log In
                </Button>}
                <Login
                    show={modalLogin}
                    onHide={() => setModalLogin(false)} />

                {/* Sign up Button */}
                {!isAuthenticated && <Button variant="light outline-info" className="ml-2" onClick={()=> setModalSignup(true)}>
                    Sign Up
                </Button>}
                <Signup
                    show={modalSignup}
                    onHide={() => setModalSignup(false)}/>
            </div>

            {/* Buttons to open up request Form and Vew time Clock History*/}
            <div className="">
            {isAuthenticated && <RequestForm />}
            {isAuthenticated && <TimeHistory />}
            </div>

        {isAuthenticated && <Logout />}

        </Navbar>
    )
}

export default NavButton;
import React, {useState} from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from '../theme/forms.css';
import {login} from '../services/index.js'; 
const LoginForm = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleClick = async (e) => {
        console.log(username, password);
        let response = await login(username, password);
        // console.log(res);
        if(response.data.success){
            localStorage.setItem('token', response.data.token);
           
             props.history.push('/dashboard');
            }

    }

    const classes = useStyles();
    
    return (
        <div>
            <div>
                <div className={`wrapper ${classes.loginForm}`}>
                    <TextField
                        className="input"
                        label="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <TextField
                        className="input"
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <Button
                        variant="outlined" color="primary"
                        onClick={event => handleClick(event)}>
                        Se connecter
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
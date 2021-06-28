import React, {useState, useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from '../theme/forms.css';
import { appStore } from '../store/';
import {login} from '../services/';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const LoginForm = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const store = useContext(appStore);
    const classes = useStyles();


    const handleClick = async (e) => {
        try {
            const response = await login(username, password);
            const token = response.data.token;
            localStorage.setItem('token', token);
            store.user.dispatch({
                type: 'LOGIN',
                payload: token
            }, store.user);
            props.history.push('/dashboard');

        } catch (error) {
            setError(true);
        }
    }

    
    return (
        <div>
            {error && 
            <Collapse in={error}>
                <Alert
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setError(false);
                    }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                severity="error">Identifiants incorrect</Alert>
            </Collapse>}
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
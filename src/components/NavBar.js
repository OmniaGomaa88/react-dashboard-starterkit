import React, {useContext, useState} from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from "react-router-dom";
import {appStore} from '../store/';

const NavBar = (props) => {
    const store = useContext(appStore);
    const [drawer, setDrawer] = useState(false);

    const styles = makeStyles({
        nav: {
            background: store.theme.nav
        },
        header: {
            background: store.theme.partials 
        }
    })();

    const toggleDrawer = () => {
        setDrawer(!drawer);
    }

    const logout = () => {
        toggleDrawer();
        localStorage.removeItem('token');
        store.user.dispatch({type: 'LOGOUT'}, store.user);
        props.history.push('/');
    }

    if (store.user.isAuth) {
        return (
            <div>
                <AppBar position="static" className={styles.header}>
                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                        <IconButton color="inherit" onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            React Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open={drawer}
                    onClose={toggleDrawer}
                    style={{ width: 600 }}
                    classes={{ paper: styles.nav }}
                >
                    <List style={{ background: store.theme.nav }}>
                        <ListItem>
                            <Link to="/">
                                <Button color="secondary" onClick={logout}>
                                    <ExitToAppIcon /> Logout
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/dashboard">
                                <Button color="primary" onClick={toggleDrawer}>
                                    <DashboardIcon /> Dashboard
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }
    else {
        return (
            <div>
                <AppBar position="static" className={styles.header}>
                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6">
                            React Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default withRouter(NavBar);
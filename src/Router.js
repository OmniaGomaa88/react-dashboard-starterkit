import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { appStore } from './store';
import {useContext} from 'react';

const AppRouter = () => {
    return (
        <Switch>
            <PublicRoute exact path='/' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
    )
}

const PrivateRoute = ({component: Component, ...rest}) => {
    const store = useContext(appStore);
    return (store.user.isAuth)
    ? <Route {...rest} component={Component} />
    : <Redirect to="/" />
}

const PublicRoute = ({ component: Component, ...rest }) => {
    const store = useContext(appStore);
    return (!store.user.isAuth)
        ? <Route {...rest} component={Component} />
        : <Redirect to="/dashboard" />
}

export default AppRouter;
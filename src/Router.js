import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SalleDetail from './pages/Dashboard/SalleDetails';
import { useState } from 'react';
import {hasAuthenticated} from './services/Auth'
import Auth from '../src/context/Auth'
import AuthenticaRoute from './components/AuthenticatRoute';
import PromoPage from './pages/promoPage'

const AppRouter = () => {
    const [isAuthenticated,setIsAuthenticated]=useState(hasAuthenticated())
    return (
        <Auth.Provider value={{isAuthenticated,setIsAuthenticated}}>
        <Switch>
            <Route exact path='/' component={Login} />
            <AuthenticaRoute exact path="/salle/:id" component={SalleDetail}/>
            <AuthenticaRoute exact path="/promo/:id" component={PromoPage}/>


            <AuthenticaRoute  path='/dashboard' component={Dashboard} />

        </Switch>
        </Auth.Provider>
    )
}

// TODO ->

const PrivateRoute = () => {}

const PublicRoute = () => {}

export default AppRouter;
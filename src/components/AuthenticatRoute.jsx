import React,{useContext} from 'react'
import { Redirect } from 'react-router'
import Auth from '../context/Auth'
import {Route} from 'react-router-dom'

const AuthenticaRoute = ({path, component})=>{
    const{isAuthenticated}= useContext(Auth)
    return isAuthenticated?(
        <Route exact path={path} component={component}/>
    ):(
        <Redirect to ='/' /> )
}
export default AuthenticaRoute
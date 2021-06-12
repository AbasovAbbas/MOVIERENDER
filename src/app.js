import React, { Component } from 'react'
import Navbar from './components/navbar'
import NotFound from './components/notFound'
import Customers from './components/customers'
import MovieForm from './components/movieForm'
import Rentals from './components/rentals'
import LoginForm from './components/loginForm'
import Register from './components/register'
import Movies from './components/movies'
import {Route, Switch, Redirect} from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <main>
                    <Switch>
                        <Route path = '/register' component = {Register}/>
                        <Route path = '/login' component = {LoginForm}/>
                        <Route path = '/movies/:id' component ={MovieForm}/>
                        <Route path = '/movies' component ={Movies}/>
                        <Route path = '/customers' component ={Customers}/>
                        <Route path = '/rentals' component ={Rentals}/>
                        <Route path = '/not-found' component ={NotFound}/>
                        <Redirect from='/' exact to='/movies' />
                        <Redirect to='/not-found'/>
                    </Switch>
                </main>
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import Joi from 'joi-browser'
import Form from './form'

class Register extends Form {
    state = {
        data : {
            name : '',
            username : '',
            password  : ''
        },
        errors : {}
    };
    schema = {
        username : Joi.string().email().required().label('Username'),
        password : Joi.string().required().min(8).label('Password'),
        name : Joi.string().required().label('Name')
    }
    render() {
        return (
            <form>
                {this.renderInput('username', 'Username')}
                {this.renderInput('password', 'Password','password')}
                {this.renderInput('name', 'Name',)}
                {this.renderBtn('Save')}
            </form>

        )
    }
}
export default Register;
import React, { Component } from 'react'
import Joi from 'joi-browser'
import Input from './common/input'

export default class Form extends Component {
    state = {
        data : {},
        errors : {}
    };
    
    handleChange = e => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(e.currentTarget);
        if(errorMessage) errors[e.currentTarget.name] = errorMessage;
        else delete errors[e.currentTarget.name]
        this.setState({errors});

        const data = {...this.state.data}
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({data});
    }
    validate = () =>{
        const result = Joi.validate(this.state.data,this.schema,{abortEarly : false});
        if(!result.error) return null;
        const errors ={}
        for(let item of result.error.details)
        errors[item.path[0]] = item.message;
        return errors;
        /*if(this.state.data.username.trim() === '')
            errors.username = 'Username is required';
        if(this.state.data.password.trim() === '')
            errors.password = 'Passsword is required';
        return errors;*/
    }
    validateProperty(input){
        const obj = {[input.name] : input.value};
        const schema = {[input.name] : this.schema[input.name]};
        const result = Joi.validate(obj,schema,{abortEarly : false});
        return result.error ? result.error.details[0].message : null;

        /*if(input.name === 'username')
            if(input.value.trim() === '') return 'Username is required';
        if(input.name === 'password')
            if(input.value.trim() === '') return 'Password is required';*/
    }
    handleSubmit = e =>{
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors : errors || {}});
        if(errors) return;
        this.onSubmit();
    }
    renderBtn(label){
        return <button disabled = {this.validate()} button className="btn btn-primary">{label}</button>
    }
    renderInput(name,label,type = 'text'){
        const {data,errors} = this.state;
        return  <Input type ={type} name = {name} value = {data[name]} label = {label} onChange = {this.handleChange} error = {errors[name]}/>
    }
}

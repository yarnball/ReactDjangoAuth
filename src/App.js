import React, { Component } from 'react';
import $ from 'jquery'; 
import logo from './logo.svg';
import './App.css';
import auth from './auth/auth';
import Router from 'react-router';


module.exports = React.createClass({
   getInitialState: function() {
        return {
          'user':[]
        }
    },

    componentDidMount: function() {
        this.loadUserData()
    },
            
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    logoutHandler: function() {
        auth.logout()
        this.context.router.replace('/app/login/')
    },

    loadUserData: function() {
        $.ajax({
            method: 'GET',
            url: '/api/users/i/',
            datatype: 'json',
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
            success: function(res) {
                this.setState(this.state.user: res)
            }.bind(this)
        })
    },

    render: function() {
        return (
            <div>
            <h1>You are now logged in, {this.state.user.username}</h1>
            <button onClick={this.logoutHandler}>Log out</button>
            </div>
        )        
    }
})


import React, { Component } from 'react'

export default class Home extends Component {
   constructor(props, context) {
        super(props, context);
        this.state = {
         users: []  
        }
   }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            this.setState({users:data})
        })
    }

    render() {
        return (
            <div>
                <h2>Users: {this.state.users.length}</h2>
            </div>
        )
    }
}

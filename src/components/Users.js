import React, { Component } from 'react'

class Users extends Component {
    render() {
        return (
            <div style={{border: '1px solid red'}}>
                <h4>This is {this.props.user.name}</h4>
                <h3>{this.props.user.username}</h3>
                <button onClick={() => this.props.handleAddToCard(this.props.user)}>Add me</button>
            </div>
        )
    }
}

export default Users;

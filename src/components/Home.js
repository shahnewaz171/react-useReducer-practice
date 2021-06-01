import React, { Component } from 'react';
import Users from './Users';

export default class Home extends Component {
   constructor(props, context) {
        super(props, context);
        this.state = {
         users: [],
         cart: []  
        }
        this.handleAddToCard = this.handleAddToCard.bind(this);
        console.log(this.state.cart);
   }

   handleAddToCard(user){
       const newCart = [...this.state.cart, user];
       this.setState({cart: newCart});
       console.log(user);
   }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            this.setState({users:data})
            console.log(data);
        })
    }

    render() {
        return (
            <div>
                <h2>Users Available: {this.state.users.length}</h2>
                <h3>Users added in the cart: {this.state.cart.length}</h3>
                {
                    this.state.users.map(user => <Users user= {user} handleAddToCard={this.handleAddToCard} key={user.id}></Users>)
                }
            </div>
        )
    }
}

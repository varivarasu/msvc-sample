import React, { Component } from 'react';
import UM from './Usermanager';
import User from './User';

class UserList extends Component {
    // componentDidMount(){
    //     this.props.getAllUsers();
    // }
    render() {
        const users = UM.getAllUsers();
        // const users = [{id:1,name:'Arun'},{id:2,name:'Varadha'},{id:3,name:'Vasu'},{id:4,name:'Thiva'}];
        let userdetails = users.map(u =>
            <li key={u.id}>
                <User user={u} />
            </li>);
        return (
            <div>
            <h3>Users List</h3>
            <ul>
                {userdetails}
            </ul>
            </div>
        );
    }
}

export default UserList;
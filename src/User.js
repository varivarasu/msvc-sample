import React, { Component } from 'react';

class User extends Component {

    render() {
        const user = this.props.user;
        let addFriend;
        if (user.id!=2) {
            addFriend = <button onClick={this._addFriendHandler}>Add Friend</button>
        }         
        return (
            <div className="row">
                <div className="col-xs-8">
                    <h3>{user.id}  {user.name}
                        {addFriend}
                    </h3>
                </div>
            </div>
        );
    }
}

export default User;
import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    const { name, email, avatar} = this.props.user;
    return (
      <div>
        <img src={avatar} alt={name} />
        <p>{name}</p>
        <p>{email}</p>
      </div>
    );
  }
}

export default UserProfile;
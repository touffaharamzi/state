import React, { Component } from 'react'

export default class Profile extends Component {
render() {
    return (
        <div>
            <h1>{this.props.fullName}</h1>
            <h1>{this.props.bio}</h1>
            <h1>{this.props.profession}</h1>
            <h1>{this.props.count}</h1>

        </div>
    );
  }
}

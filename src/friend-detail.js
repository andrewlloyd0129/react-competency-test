import React, { Component } from "react";
import axios from "axios";

export default class FriendDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      data: 0
    };
  }

  getFriendDetail() {
    axios
      .get(
        `http://private-5bdb3-friendmock.apiary-mock.com/friends/${
          this.state.props.match.params.slug
        }`
      )
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getFriendDetail();
  }

  render() {
    return (
      <div>
        <h2>Portfolio Detail for {this.state.props.match.params.slug}</h2>
      </div>
    );
  }
}

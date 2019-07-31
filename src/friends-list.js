import React, { Component } from "react";
import axios from "axios";

import FriendListEntry from "./friend-list-entry";

export default class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  getFriendsListItems() {
    axios
      .get("http://private-5bdb3-friendmock.apiary-mock.com/friends")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getFriends() {
    return this.state.data.map(entry => {
      return <FriendListEntry key={entry.id} entry={entry} />;
    });
  }

  componentDidMount() {
    this.getFriendsListItems();
  }

  render() {
    return (
      <div>
        <h1>Friends List</h1>
        {this.getFriends()}
      </div>
    );
  }
}

import React, {Component} from "react";
import {connect} from "react-redux";

export default connect(({user}) => ({user}))(
  class UserPage extends Component {
    render() {
      const {user} = this.props;
      const {userInfo, loading, err, tip} = user;
      return (
        <div>
          <h3>UserPage</h3>
          <p>id: {userInfo.id}</p>
          <p>姓名：{userInfo.name}</p>
          <p>积分：{userInfo.money}</p>
        </div>
      );
    }
  }
);

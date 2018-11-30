import React, { Component } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Menu from "./Menu";
import Best from "./Best";
// import "../../style.css";

import "gestalt/dist/gestalt.css";
import "./list.css";

import { Layout } from "antd";
const { Header, Content } = Layout;

class List extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header className="header">
            <Logo className="logo" />
            <Title className="title" />
            <Menu className="menu" />
          </Header>

          <Content className="content">
            <Best className="best" />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default List;

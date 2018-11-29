import React, { Component } from "react";
import Title from "./Title";
import Slider from "./Slider";
import Registration from "./Registration"
import FooterSection from "./FooterSection";

/* Gestalt */
import "gestalt/dist/gestalt.css";
import "./main.css";

/* Ant Design */
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

class Main extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">

          <Header className="header">
            <Title></Title>
          </Header>

          <Content className="content">
            <Slider className="slider"></Slider>
            <Registration className="registration"></Registration>
          </Content>

          <Footer className="footer">
            <FooterSection></FooterSection>
          </Footer>

        </Layout>
      </div>
    );
  }
}

export default Main;

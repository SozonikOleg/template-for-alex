import React from "react";
import { Layout, Menu, Card, Row, Col, Typography, Button } from "antd";
import "./styles/global.scss";
import "./App.scss";
// import Paragraph from "antd/es/skeleton/Paragraph";
import { SmileOutlined, SearchOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const App = () => {
  return (
    <Layout>
      {/* Header */}
      <Header className="header">
        <div className="logo">MySite</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      {/* Content */}
      <Content className="content">
        <Title level={2}>Welcome to MySite</Title>
        <Text>Explore the most popular features of our website.</Text>
        <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
          <Col span={8}>
            <Card className="card">Feature 1</Card>
          </Col>
          <Col span={8}>
            <Card className="card">Feature 2</Card>
          </Col>
          <Col span={8}>
            <Card className="card">Feature 3</Card>
          </Col>
        </Row>
      </Content>
      {/* <Content>
        <Row gutter={16}>
          <Col span={8} style={{ background: "#ccc" }}>
            Column 1
          </Col>
          <Col span={8} style={{ background: "#ddd" }}>
            Column 2
          </Col>
          <Col span={8} style={{ background: "#eee" }}>
            Column 3
          </Col>
        </Row>
      </Content>
      <Content>
        <>
          <Title level={2}>Heading</Title>
          <Text type="secondary">Secondary Text</Text>
        </>
      </Content>
      <Content>
        <>
          <Button type="primary">Primary Button</Button>
          <Button danger>Danger Button</Button>
        </>
      </Content>
      <Content>
        <>
          <SmileOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
          <SearchOutlined style={{ fontSize: "24px", color: "#ff4d4f" }} />
        </>
      </Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
      Footer */}
      <Footer className="footer">MySite ©2024 Created with Ant Design</Footer>
    </Layout>
  );
};

export default App;

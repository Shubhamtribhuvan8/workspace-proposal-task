/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from "next";
// import Head from "next/head";
import { Avatar, Col, Row, Button, Card, Space, Typography, Badge } from "antd";

import {
  SearchOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  CompassTwoTone,
  InboxOutlined,
  DownloadOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
  PlusOutlined,
  ShareAltOutlined,
  MessageOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import CustomProgress from "./component/slider";
import Listes from "./component/list";
const Home: NextPage = () => {
  const colStyle = { textAlign: "end", position: "relative", top: "1rem" };
  const colStyle2 = { textAlign: "start", position: "relative", top: "1rem" };
  const colStyle4 = { textAlign: "end", position: "relative" };
  const colStyle3 = {
    textAlign: "start",
    position: "relative",
    color: "black",
    fontWeight: "Bold",
    fontSize: "2rem",
  };
  const colStyle6 = {
    textAlign: "start",
    position: "relative",
    color: "black",
    fontWeight: "Bold",
    fontSize: "23px",
  };
  const colStyle7 = {
    textAlign: "end",
    position: "relative",
    color: "black",
    fontSize: "19px",
  };
  const colStyle8 = {
    textAlign: "start",
    position: "relative",
    fontWeight: "Bold",
  };
  const colStyle9 = {
    textAlign: "end",
    position: "relative",
    fontWeight: "Bold",
  };
  const buttonStyle = {
    width: "10rem",
    height: "3rem",
    fontWeight: "bold",
  };
  const iconStyle = { fontSize: "25px", strokeWidth: 1, margin: "0 16px 15px" };
  const { Text } = Typography;
  return (
    <div>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <h1 className="main">Helllo</h1> */}
      <Row style={{ boxShadow: "1px 1px 1px 1px #d3d9d3", height: "64px" }}>
        <Col xs={12} sm={12} md={8} style={colStyle2}>
          <CompassTwoTone style={iconStyle} />
        </Col>
        <Col xs={12} sm={12} md={8} style={colStyle} offset={8}>
          <SearchOutlined style={iconStyle} />
          <InboxOutlined style={iconStyle} />
          <BellOutlined style={iconStyle} />
          <QuestionCircleOutlined style={iconStyle} />
          <Avatar
            style={iconStyle}
            src={
              "data:image/png;base64,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"
            }
          />
        </Col>
      </Row>
      <br />
      <br />
      <Row style={{ justifyContent: "space-between" }}>
        <Col span={24} md={8} style={colStyle3}>
          WeWork + Salesforce
        </Col>
        <Col span={24} md={8} offset={0} style={colStyle4}>
          <Button type="primary" danger style={buttonStyle}>
            Publish/Share
          </Button>
        </Col>
      </Row>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card>
          <div style={{ position: "relative", width: "100%" }}>
            <img
              alt="example"
              src="https://media.licdn.com/dms/image/C4D1BAQH4nKPhee8q-w/company-background_10000/0/1519801535389?e=1684681200&v=beta&t=h_-XIqt_qPQtCY9pInvvqyJZqN0MTS3hJGjB7O_K0EY"
              style={{ width: "83rem", height: "13rem", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "50%",
                height: "100%",
                opacity: "1.6",
                background:
                  "linear-gradient(to left, rgb(263 273 255 / 89%) 0%, rgb(246 232 232 / 2%) 100%)",
                transform: "skewX(-35deg) rotateY(125deg)",
                transformOrigin: "top center",
                // background:
                //   "linear-gradient(to left, rgb(263 273 255 / 86%) 0%, rgb(246 232 232 / 0%) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 25,
                right: 0,
                padding: "1rem",
                // background: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "black",
                fontWeight: "bold",
                left: "31rem",
                fontSize: "x-large",
                lineHeight: "normal",
              }}
            >
              <h2 style={{ margin: "auto" }}>Workspace</h2>
              <h2 style={{ margin: "auto" }}>Proposal</h2>
            </div>
          </div>
        </Card>
      </div>
      {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4FheZ2Vug9em0KjgqPwgWA178OBdVGA22UnrvSBXkWadwy8eirYVIaviyC5WA_w2rP-y5yOkbSQ&usqp=CAU&ec=48665698 */}
      <Card
        bordered={true}
        style={{
          width: "15%",
          height: "6rem",
          position: "relative",
          right: "-1rem",
          top: "-4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            alt="example"
            src="https://www.logo.wine/a/logo/WeWork/WeWork-Icon-Logo.wine.svg"
            style={{ width: "5rem", height: "6rem", objectFit: "cover" }}
          />
          <PlusOutlined />
          <img
            alt="example"
            src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg?resize=1024,576"
            style={{ width: "5rem", height: "6rem", objectFit: "cover" }}
          />
        </div>
      </Card>
      <br />
      <Row>
        <Col span={8} style={colStyle6}>
          Project Scope Recap
        </Col>
        <Col span={8} offset={8} style={colStyle7}>
          <div style={{ position: "relative", left: " -10rem" }}>
            Mutual Action Plan
          </div>
          <div>
            <CustomProgress percent={3} steps={17} />
          </div>
        </Col>
      </Row>
      <br />
      <Row style={{ boxShadow: "0px 1px 0px 0px gainsboro" }}>
        <Col span={9} style={colStyle8}>
          {" "}
          <Button style={{ height: "3rem", fontWeight: "700" }}>
            Basic Info
          </Button>{" "}
          <Button
            style={{
              height: "3rem",
              fontWeight: "700",
              backgroundColor: "#f2fbf9",
            }}
          >
            Files
          </Button>{" "}
          <Button
            style={{
              height: "3rem",
              fontWeight: "700",
              backgroundColor: "#f2fbf9",
            }}
          >
            Mutual Action Plan
          </Button>{" "}
          <Button
            style={{
              height: "3rem",
              fontWeight: "700",
              backgroundColor: "#f2fbf9",
            }}
          >
            Contact
          </Button>{" "}
        </Col>
        <Col span={7} offset={8} style={colStyle9}>
          <Button
            style={{
              height: "3rem",
              fontWeight: "700",
              backgroundColor: "#f2fbf9",
            }}
          >
            Internal Actions
          </Button>
        </Col>
      </Row>
      <br />
      <br />

      <Row>
        <Col span={18} push={6}>
          <Space direction="vertical" size={16}>
            <Card
              title="Company Profile"
              extra={
                <div
                  style={{
                    gap: "13px",
                    display: "flex",
                    bottom: "1rem",
                    position: "relative",
                  }}
                >
                  <DownloadOutlined style={{ fontSize: "25px" }} />
                  <EyeInvisibleOutlined style={{ fontSize: "25px" }} />
                  <DeleteOutlined style={{ fontSize: "25px" }} />
                </div>
              }
              style={{ position: "relative", width: "65rem", left: "4%" }}
              cover={
                <div
                  style={{
                    position: "relative",
                    width: "65rem",
                    height: "27rem",
                  }}
                >
                  <img
                    alt="example"
                    src="https://ctfassets.imgix.net/vh7r69kgcki3/7FftQJ8Wcw7y0TQ8NLIS3b/157b910fa71a001dc85347eb639c626b/Web_150DPI-WeWork__-__21_Collyer_Quay__-__Singapore-15.jpg?auto=format%20compress&fit=crop&q=50&w=500px"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                      width: "33%",
                      boxShadow: "0px 0px 0px 0px black",
                      backgroundColor: "#fff8f8",
                      height: "8rem",
                      opacity: "0.8",
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontSize: "3rem",
                        fontWeight: "bold",
                      }}
                    >
                      wework
                    </Text>
                    <br />
                    <Text
                      style={{
                        color: "black",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      For all the ways you work, we're here
                    </Text>
                  </div>
                </div>
              }
            ></Card>
          </Space>
          <div className="iconmsgshare">
            <Badge count={6} offset={[5, -2]}>
              <MessageOutlined style={{ fontSize: "16px" }} />
            </Badge>
            <MinusOutlined
              style={{ fontSize: "16px", transform: "rotate(90deg)" }}
            />
            <ShareAltOutlined style={{ fontSize: "16px" }} />
          </div>
        </Col>

        <Col span={6} pull={18}>
          <Listes />
        </Col>
      </Row>
      <br />
      <br />
    </div>
  );
};

export default Home;

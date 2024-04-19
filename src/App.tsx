import "./App.css";
import { Button, Flex, Layout, Menu } from "antd";
import { AppstoreFilled, BellFilled } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <>
      <Layout style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <Header
          style={{
            position: "sticky",
            // zIndex: 10,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#2e3b52",
          }}
        >
          <div
            style={{
              backgroundColor: "red",
              display: "flex",
              width: "65px",
              height: "64px",
              justifyContent: "center",
            }}
          >
            <AppstoreFilled style={{ color: "#fff", fontSize: "30px" }} />
          </div>
          <div
            style={{
              backgroundColor: "green",
              display: "flex",
              width: "170px",
              justifyContent: "center",
            }}
          >
            LOGO
          </div>
          <div
            style={{
              marginLeft: "600px",
              width: "250px",
              height: "40px",
              backgroundColor: "#202a3c",
              display: "flex",
              alignItems: "center",
              color: "#fff",
              borderRadius: "3px",
              fontSize: "13px",
            }}
          >
            <p style={{ marginRight: "120px", marginLeft: "15px" }}>ทั้งหมด</p>
            <p style={{ marginRight: "10px", marginLeft: "10px" }}>|</p>
            <p style={{ display: "flex", alignContent: "flex-end" }}>เปลี่ยน</p>
          </div>
          <div
            style={{
              marginLeft: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <BellFilled style={{ color: "#fff", fontSize: "24px" }} />
          </div>
          <div
            style={{
              marginRight: "15px",
              marginLeft: "15px",
              fontSize: "24px",
              color: "#fff",
            }}
          >
            |
          </div>
          <div
            style={{
              width: "250px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              color: "#fff",
              borderRadius: "3px",
              fontSize: "13px",
            }}
          >
            hhhhhhhhhhhhhhhhhhhh
          </div>
        </Header>
        <div
          style={{
            backgroundColor: "pink",
            width: "100vw",
            height: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Hello
        </div>
        <Layout>
          <Sider style={{ background: "#2F353A", height: "100vh" }}></Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;

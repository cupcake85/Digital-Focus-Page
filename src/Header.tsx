import "./App.css";
import { Button, Flex, Layout, Menu } from "antd";
import { AppstoreFilled } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function header() {
  return (
    <>
      <Layout style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <Header
          style={{
            position: "sticky",
            // zIndex: 10,
            display: "flex",
            backgroundColor: "#2e3b52",
          }}
        >
          <div
            style={{
              backgroundColor: "red",
              display: "flex",
              width: "65px",
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
          <Button>ffff</Button>
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
      </Layout>
    </>
  );
}

export default header;

import { Row, Col } from "antd";
import {
  CompassTwoTone,
  SearchOutlined,
  InboxOutlined,
  BellOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import UserMenu from "./usermenu";

const Navigation: React.FC = () => {
  const iconStyle: React.CSSProperties = {
    fontSize: "24px",
    marginRight: "10px",
  };

  return (
    <Row className="row11">
      <Col xs={12} sm={12} md={8} className="colStyle2">
        <CompassTwoTone style={iconStyle} />
      </Col>
      <UserMenu />
    </Row>
  );
};

export default Navigation;

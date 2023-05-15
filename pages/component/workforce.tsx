import React from "react";
import { Row, Col, Button } from "antd";
interface WorkforceProps {
  text: string;
  buttonText: string;
  buttonType?: "primary" | "default" | "dashed" | "link" | "text";
  buttonDanger?: boolean;
  buttonClassName?: string;
}

const WorkForce: React.FC<WorkforceProps> = ({
  text,
  buttonText,
  buttonType = "primary",
  buttonDanger = true,
  buttonClassName = "buttonStyle",
}) => {
  return (
    <Row className="row12">
      <Col span={24} md={8} className="colStyle3">
        {text}
      </Col>
      <Col span={24} md={8} offset={0} className="colStyle4">
        <Button
          type={buttonType}
          danger={buttonDanger}
          className={`buttonStyle ${buttonClassName}`}
        >
          {buttonText}
        </Button>
      </Col>
    </Row>
  );
};

export default WorkForce;

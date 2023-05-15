/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Card } from "antd";
const Proposal: React.FC = () => {
  return (
    <Card>
      <div className="div2">
        <img
          alt="example"
          src="https://media.licdn.com/dms/image/C4D1BAQH4nKPhee8q-w/company-background_10000/0/1519801535389?e=1684681200&v=beta&t=h_-XIqt_qPQtCY9pInvvqyJZqN0MTS3hJGjB7O_K0EY"
          className="image2"
        />
        <div className="imagecut" />
        <div className="workspace2">
          <h2 style={{ margin: "auto" }}>Workspace</h2>
          <h2 style={{ margin: "auto" }}>Proposal</h2>
        </div>
      </div>
    </Card>
  );
};

export default Proposal;

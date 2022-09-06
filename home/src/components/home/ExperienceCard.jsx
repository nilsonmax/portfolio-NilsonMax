import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          <br />
          {data.date}
          <br />
          <br />
          {data.experience}
          <br />
          <br />
          {data.aptitudes}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;
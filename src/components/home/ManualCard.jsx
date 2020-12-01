import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

function ManualCard({ value }) {
  const {
    name,
    description,
    url,
    classId,
    date
  } = value;
  
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{description || <Skeleton count={3} />} </Card.Text>
          {url ? (
            <a
              href={url}
              target=" _blank"
              className="btn btn-outline-secondary"
            >
              Link
            </a>
          ) : (
            <Skeleton count={2} />
          )}
          <hr />
          {value ? (
            <p className="card-text">
            <small className="text-muted">From {classId}, {date}</small>
          </p>
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ManualCard;
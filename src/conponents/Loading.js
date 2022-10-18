import React, { useEffect, useState } from "react";
import { Row, Col, Card, Container, Button, Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spinner animation="border" role="status" st>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <div className="h3 mt-3">Loading...</div>
    </div>
  );
}

export default Loading;

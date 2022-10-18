import React from "react";
import { Button } from "react-bootstrap";

function ReloadBtn({ handleOnClick }) {
  return (
    <div width={"100%"} style={{ padding: "20px 0" }}>
      <Button
        variant="outline-success"
        style={{ width: "100%", padding: "10px" }}
        onClick={handleOnClick}
      >
        Reload
      </Button>
    </div>
  );
}

export default ReloadBtn;

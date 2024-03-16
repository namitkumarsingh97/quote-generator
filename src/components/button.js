import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function button() {
  return (
    <div>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => window.location.reload(false)}
      >
        Refresh
      </Button>
    </div>
  );
}

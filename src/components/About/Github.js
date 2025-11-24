import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      {/* Affiche le calendrier GitHub pour ton username */}
      <GitHubCalendar username="aimaad" />
    </Row>
  );
}

export default Github;

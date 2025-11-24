import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCards.css";
function ProjectCards({ imgPath, imgStyle, title, description, ghLink, ghLinks, isBlog, demoLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        alt="card-img"
        style={imgStyle ? imgStyle : { width: "100%", height: "auto" }}
      />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        {/* --- 🔥 If multiple Github links --- */}
        {ghLinks && ghLinks.length > 0 ? (
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {ghLinks.map((link, index) => (
              <Button
                key={index}
                variant="primary"
                href={link}
                target="_blank"
              >
                <BsGithub /> &nbsp; GitHub {index + 1}
              </Button>
            ))}
          </div>
        ) : (
          /* --- Default single GitHub link --- */
          <Button variant="primary" href={ghLink} target="_blank">
            <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}


export default ProjectCards;

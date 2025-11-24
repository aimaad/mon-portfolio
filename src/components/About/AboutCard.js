import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Bouchnef Imadeddine</span>, a software enthusiast with a{" "}
            <span className="purple">Licence in Mathematical and Computer Sciences (2022)</span> and a{" "}
            <span className="purple">diploma in the Engineering Cycle in Software Engineering (2025)</span>.
            <br />
            I’m currently <span className="purple">studying in Paris, France, in an apprenticeship program</span> and actively seeking an apprenticeship opportunity in software engineering.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I love turning ideas into real projects, staying curious, and creating solutions that make a difference."
          </p>
          <footer className="blockquote-footer">Bouchnef Imadeddine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

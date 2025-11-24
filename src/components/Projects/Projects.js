import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import erestro from "../../Assets/Projects/erestro.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/docchain.png";
import ebanking from "../../Assets/Projects/ebanking-digital.png";
import bitsOfCode from "../../Assets/Projects/VipTravel.png";
import wordpressLogo from "../../Assets/Projects/wordpress-icon.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Docchain"
              description=" A decentralized document verification system using Blockchain and IPFS. Features include storing document hashes on the Blockchain, keeping documents on IPFS, and allowing authorized parties to easily verify and retrieve documents securely."
              ghLink="https://github.com/aimaad/blockchain_app"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Vip Travel"
              description="Laravel multi-vendor web application for managing tour packages. Allows travel agents to collaborate and offer their packages, and Vip Travel to publish its own tours. Customers can book directly. Package creation is simplified in 3 clicks thanks to integrated APIs (Amadeus, Booking, etc.), including flights, hotels, and agency services. Payments are integrated via CMI, agent commissions are paid automatically, and detailed reports are generated automatically."
              ghLink="https://github.com/aimaad/Vip_Travel_Project"
              demoLink="https://dev.groups-travel.ma/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/aimaad/Editor.io"
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/aimaad/Plant_AI"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebanking}
              isBlog={false}
              title="E-Banking Digital"
              description="A modern digital banking application built with a microservices architecture using Spring Boot (Java) for the backend and Angular for the frontend.
              The system allows users to manage their bank accounts, perform credit/debit operations, transfer funds, and visualize detailed transaction history in real time.
              It features a clean architecture (backend + frontend separation), secure REST APIs, and a responsive UI for smooth interaction."
              ghLink="https://github.com/aimaad/JEE-Spring-Angular-Digital-Banking"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erestro}
              isBlog={false}
              title="Pause Regal"
              description="Pause Regal est un écosystème complet de livraison de repas “single vendor”, composé de trois applications interconnectées. La Customer App (Flutter/Dart) permet de parcourir le menu, passer commande, choisir une adresse via Google Maps, payer en ligne et suivre la livraison. La Rider App (Flutter/Dart) permet aux livreurs de recevoir les commandes, naviguer avec Google Maps et mettre à jour le statut en temps réel. Le Vendor Dashboard (PHP/MySQL) offre la gestion des plats, des commandes, des livreurs, des paramètres du restaurant et des statistiques. L’écosystème utilise Flutter, Firebase, Google Maps SDK, REST APIs, PHP et MySQL pour gérer l’ensemble du workflow : commande, préparation, livraison, suivi en temps réel et analytics."
              ghLinks={[
                "https://github.com/aimaad/Pause-Regal-Single-Vender-Customer-App",
                "https://github.com/aimaad/Pause-Regal-Single-Vendor---PHP",
                "https://github.com/aimaad/Pause-Regal-Vender-Rider-App"
              ]}
             
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
        <p style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
  Here are some WordPress projects I've worked on recently.
</p>
        <Row className="d-flex justify-content-center">
        <Col md={6} className="project-card">
  <div className="project-card-view p-4">

    {/* Logo WordPress centré */}
    <div className="text-center mb-4">
      <img 
        src={wordpressLogo}   // ton logo importé
        alt="WordPress"
        style={{ width: "80px" }}
      />
    </div>

    {/* Liens WordPress */}
    <div className="d-flex flex-column gap-3">

      <a 
        href="https://karasbijoux.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-100 p-3 rounded project-link"
      >
         ➤ Karas Bijoux : Site e-commerce pour bijoux
      </a>

      <a 
        href="https://www.hestim.ma/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-100 p-3 rounded project-link"
      >
      ➤ Hestim : Site de l’école et candidatures en ligne
      </a>

      <a 
        href="https://centrepsymulticulturel.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-100 p-3 rounded project-link"
      >
        ➤ Centre Psy Multiculturel : Site du centre et réservation de sessions
      </a>

      <a 
  href="https://quintessia.ma/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-100 p-3 rounded project-link"
>
  ➤ Quintessia : Site d’information et services pour terrains de padel
</a>
<a 
  href="https://neverseen.ma/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-100 p-3 rounded project-link"
>
  ➤ Neverseen : Site présentant les réalisations de la boîte de production
</a>

<a 
  href="https://ecolohome.ma/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-100 p-3 rounded project-link"
>
➤ Ecolohome : Site e-commerce pour présenter l’entreprise et vendre leurs produits
</a>

<a 
  href="https://toplinkyou.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-100 p-3 rounded project-link"
>
  ➤ Top Link You : Site e-commerce pour la vente de produits électroniques et électroménagers
</a>
    </div>

  </div>
</Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import Thumbnail from "./thumbnail.js";
import "./app.css";

function Projects(props) {
  return (
    // Render a Thumbnail component

    <div className="projects">
      <Thumbnail
        link="https://drive.google.com/file/d/1UH4S3wuv9a6r-lou8KtNdipA1FkPJSLQ/view?usp=sharing"
        image="https://imgur.com/t06w8cx.png"
        title="Order fulfillment app"
        category="React Native tablet app, iOS app, FireTV app"
      />

      <Thumbnail
        link="https://drive.google.com/file/d/1vZNY6HMrHnqKFTit-JBkU0pAP4mgoZPJ/view?usp=sharing"
        image="https://imgur.com/G2bczcV.png"
        title="Driver app"
        category="iOS, and Android app"
      />

      {/* <Thumbnail
        link="https://medium.com/@michaelparkerdesign/discover-page-map-first-experience-design-code-38cb630df0e7?sk=ef9c36a15f4653aa3045378518479f91"
        image="https://imgur.com/iPG8SBs.png"
        title="Dark mode"
        category="Introducing dark mode to our software"
      /> */}

      <Thumbnail
        link="https://drive.google.com/file/d/1myx8ogsHc6z02GvOlk3qYY7UMdufumGH/view?usp=sharing"
        image="https://imgur.com/rYDnKqR.png"
        title="Cart Redesign"
        category="Desktop, and web app"
      />

      {/* <Thumbnail
        link="https://medium.com/@michaelparkerdesign/discover-page-map-first-experience-design-code-38cb630df0e7?sk=ef9c36a15f4653aa3045378518479f91"
        image="https://imgur.com/0QMqFHb.png"
        title="Retail POS software"
        category="ELO POS device, and tablet app"
      /> */}

      <Thumbnail
        link="https://medium.com/@michaelparkerdesign/discover-page-map-first-experience-design-code-38cb630df0e7?sk=ef9c36a15f4653aa3045378518479f91"
        image="https://imgur.com/mSxiAqe.png"
        title="Simple Checkout"
        category="Building a product first discovery experience"
      />

      {/* <Thumbnail
        link="https://medium.com/@michaelparkerdesign/discover-page-map-first-experience-design-code-38cb630df0e7?sk=ef9c36a15f4653aa3045378518479f91"
        image="https://imgur.com/xvLHLOm.png"
        title="Weedmaps redesign"
        category="Redesigned the b2c UX, and UI"
      /> */}

      {/* <Thumbnail
        link="https://medium.com/@michaelparkerdesign/discover-page-map-first-experience-design-code-38cb630df0e7?sk=ef9c36a15f4653aa3045378518479f91"
        image="https://imgur.com/iWIb8WN.png"
        title="WM B2C libraries"
        category="Creating a scaleable design library for our business to consumer facing products"
      /> */}
    </div>
  );
}

export default Projects;

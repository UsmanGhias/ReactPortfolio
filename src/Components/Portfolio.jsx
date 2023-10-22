import React from "react";


import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "E-commerce Websites",
    description:
      "Developed Python-based E-commerce websites using Django, PostgreSQL, HTML, CSS, and JavaScript.",
  },
  {
    title: "Real Estate Applications",
    description:
      "Built real estate applications with Python and Django for property listings and management.",
  },
  {
    title: "Blogging Sites",
    description:
      "Created dynamic blogging sites with Django, enabling users to publish and manage their blog posts.",
  },
  {
    title: "Blood Donation Management Systems",
    description:
      "Developed a web-based system for managing blood donations, ensuring efficient tracking and organization.",
  },
  {
    title: "Full Stack Web App",
    description:
      "Developed captivating tour websites, online book management systems, and rule-based login systems using Java (J2EE), HTML, CSS, JavaScript, and MySQL database.",
  },
  {
    title: "TensorFlow Chatbot",
    description:
      "Designed and implemented a chatbot using TensorFlow and deep learning techniques for natural language understanding and generation.",
  },
  {
    title: "Deep Learning Projects",
    description:
      "Engaged in deep learning projects focused on various domains, including computer vision, natural language processing, and speech recognition.",
  },
  {
    title: "Space and Science FYP",
    description:
      "Participated in a final year project (FYP) related to space and science, conducting research and developing innovative solutions.",
  },

  {
    title: "Data Science Projects",
    description:
    "Developed data science projects using Python, including data analysis, data visualization, and machine learning.",
  },

];




const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

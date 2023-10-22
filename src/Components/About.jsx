import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "Usman Ghias - purple and blue abstract background";

const description =
  "Enthusiastic Python, JS Developer, I wish to work in challenging, stimulating & consistent environment to boost up my skills. Coding is my Passion";

const skillsList = [
  "Full Stack Development",
  "Deep Learning",
  "GeoSpatial Remote Sensing",
  "Android Development",
  "Python Development",
  "JavaScript Development",
  "React Development",
];

const detailOrQuote =
"Man will not get anything unless he works hard (Surah al-Najm, 53:39)";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

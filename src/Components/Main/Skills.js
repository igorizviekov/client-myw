import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import pen from "../../Assets/Pen.svg";
import codeIcon from "../../Assets/Code.svg";
import Animation from "../UI/AnimationTracking";
export default function Skills() {
  const [design, setDesign] = useState([]);
  const [code, setCode] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const graphqlQuery = {
      query: `
      {
        skills {
          design
          code
        }
      }
      `
    };
    axios
      .post("http://localhost:8080/graphql", graphqlQuery)
      .then(response => {
        if (response.data.errors) {
          return setError(true);
        }
        const codeData = [];
        const designData = [];
        response.data.data.skills.map(s => {
          return codeData.push(s.code), designData.push(s.design);
        });
        const filteredCode = codeData.filter(c => c !== null);
        const filteredDesign = designData.filter(d => d !== null);
        setCode(filteredCode);
        setDesign(filteredDesign);
      })
      .catch(() => setError(true));
  }, []);
  let codeSkills = code.map(skill => {
    return <p key={skill}>{skill}</p>;
  });
  let designSkills = design.map(skill => {
    return <p key={skill}>{skill}</p>;
  });
  if (error) {
    codeSkills = ["JavaScript", "React", "NodeJS", "Vue", "GraphQL", "mongoDB"];
    designSkills = ["Illustrator", "Photoshop", "Final Cut", "XD"];
  }
  return (
    <Fragment>
      <div className="Skills">
        <Animation>
          <h1>What do I use?</h1>
        </Animation>
        <br />
        <img src={pen} alt="Pen" />
        <br />
        {designSkills}
        <img src={codeIcon} alt="Code" />
        <div className="Grid">{codeSkills}</div>
      </div>
      <div className="Skills2">
        <Animation>
          <h1>What do I do?</h1>
        </Animation>
        <br />
        <div className="SkillsInfo">
          <section>
            <h2>Web Design</h2>
            <p>
              Minimalist and clean, where every stroke exists for a purpose. All
              about your website, including the content, the way it looks, and
              the way it works - I’ve got you covered.
            </p>
          </section>
          <section>
            <h2>Web Development</h2>
            <p>
              I will implement the design so the website runs smoothly in
              different browsers, different operating systems and different
              devices, from widescreen monitors to mobile phones.
            </p>
          </section>
        </div>
      </div>
    </Fragment>
  );
}

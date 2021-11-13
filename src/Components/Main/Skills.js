import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import pen from '../../Assets/Pen.svg';
import codeIcon from '../../Assets/Code.svg';
import { codePlaceholder, designPlaceholder } from '../../helpers';
import Animation from '../UI/AnimationTracking';
import { getAPI } from '../../helpers';
export default function Skills() {
  const [design, setDesign] = useState([]);
  const [code, setCode] = useState([]);
  const [, setError] = useState(false);

  useEffect(() => {
    //skills placeholder
    setCode(codePlaceholder);
    setDesign(designPlaceholder);
    const graphqlQuery = {
      query: `
      {
        skills {
          design {
            id
            design
          }
          code {
            id
            code
          }
        }
      }
      `
    };
    axios
      .post(getAPI(), graphqlQuery)
      .then(response => {
        if (response.data.errors) {
          return setError(true);
        }
        setCode(response.data.data.skills.code);
        setDesign(response.data.data.skills.design);
      })
      .catch(() => setError(true));
  }, []);
  const codeSkills = code.map(skill => {
    return <p key={skill.id}>{skill.code}</p>;
  });
  const designSkills = design.map(skill => {
    return <p key={skill.id}>{skill.design}</p>;
  });
  return (
    <Fragment>
      <div className="Skills">
        <Animation>
          <h1>What do I use?</h1>
        </Animation>
        <br />
        <img src={pen} alt="Pen" />
        <div className="Grid">{designSkills}</div>
        <img src={codeIcon} alt="Code" />
        <div className="Grid">{codeSkills}</div>
      </div>
      <div className="Skills2">
        <Animation>
          <h1>What do I do?</h1>
        </Animation>
        <div className="SkillsInfo">
          <section>
            <h2>Web Design</h2>
            <p>
              A responsive and clean website that meets all the latest trends
              may achieve the goal of shaping a strong brand, and still, it is
              not enough.
            </p>
            <p>
              I am passionate about creating a design that sells the product.
            </p>
          </section>
          <section>
            <h2>Web Development</h2>
            <p>
              In a highly competitive market such as a digital one, you need to
              stand out.
            </p>
            <p style={{ margin: 0 }}>I like to solve problems.</p>
            <p>Do you have crazy ideas?</p>
          </section>
        </div>
      </div>
    </Fragment>
  );
}

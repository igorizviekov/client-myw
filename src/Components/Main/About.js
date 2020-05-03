import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../UI/Button/Button";
import { useHistory } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { getAPI } from "../../helpers";
import Animation from "../UI/AnimationTracking";
import Placeholder from "../UI/AnimationPlaceholder";
const About = props => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();
  const slide = useSpring({
    opacity: 1,
    marginTop: 0,
    delay: 400,
    from: {
      opacity: 0,
      marginTop: 50
    }
  });
  const contactButton = () => {
    history.push("/contact");
  };
  useEffect(() => {
    setLoading(true);
    const graphqlQuery = {
      query: `{ imageURL }`
    };
    axios
      .post(getAPI(), graphqlQuery)
      .then(response => {
        if (response.data.errors) {
          setLoading(false);
          return setError(true);
        }
        const loadedData = response.data.data.imageURL;
        setImage(loadedData);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        return setError(true);
      });
  }, []);
  let profilePicture = (
    <animated.img
      src={image}
      style={slide}
      className="profilePicture"
      alt="profile picture"
    />
  );
  if (loading) {
    profilePicture = <Placeholder />;
  }
  return (
    <div className="About">
      <section>
        <Animation>
          <h1>About me</h1>
        </Animation>
        <div>
          <p>I am always up to meet new people, learn new things and travel.</p>
          <p>
            For the past 10 years I’ve lived and worked in 5 different countries
            in Europe, the Middle East, North America and Asia.
          </p>
          <p>
            In 2019, I tried how to code, and since then it has become a part of
            my daily routine.
          </p>
          <br />
          <Button clicked={contactButton}>CONTACT</Button>
        </div>
      </section>
      {error ? null : profilePicture}
    </div>
  );
};
export default About;

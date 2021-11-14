import React from 'react';
import Button from '../UI/Button/Button';
import BackgroundAnimation from '../UI/Background/AboutMeBackground';
import { useHistory } from 'react-router-dom';
import Animation from '../UI/AnimationTracking';
const About = props => {
  const history = useHistory();

  const contactButton = () => {
    history.push('/contact');
  };

  return (
    <BackgroundAnimation>
      <section>
        <Animation>
          <h1>About me</h1>
        </Animation>
        <div>
          <p>
            I love to explore. For the past 10 years, I’ve lived and worked in 7
            different countries in Europe, the Middle East, North America, and
            Asia.
          </p>
          <p>
            In 2019, I tried how to code, and since then it has become a part of
            my daily routine.
          </p>
          <p>
            Although, writing code itself is not enough to be a good developer.
            So I am lucky to do what I love and achieve more every day.
          </p>
          <Button clicked={contactButton}>CONTACT</Button>
        </div>
      </section>
    </BackgroundAnimation>
  );
};
export default About;

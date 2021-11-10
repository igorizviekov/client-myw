import React, { Fragment } from 'react';
import Main from '../Components/Main/Main';
import About from '../Components/Main/About';
import Skills from '../Components/Main/Skills';
import Button from '../Components/UI/Button/Button';
import '../Style/Main.css';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const portfolioButton = () => {
    history.push('/portfolio');
  };

  return (
    <Fragment>
      <Main />
      <Button clicked={portfolioButton}>PORTFOLIO</Button>
      <div>dev mode</div>
      <About />
      <Skills />
    </Fragment>
  );
}

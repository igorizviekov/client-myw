import React, { Fragment } from 'react';
import Main from '../Components/Main/Main';
import About from '../Components/Main/About';
import Skills from '../Components/Main/Skills';
import '../Style/Main.css';

export default function Home() {
  return (
    <Fragment>
      <Main />
      <div>dev mode</div>
      <About />
      <Skills />
    </Fragment>
  );
}

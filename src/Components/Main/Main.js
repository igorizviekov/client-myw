import React from 'react';
import { useHistory } from 'react-router-dom';
import Typing from 'react-typing-animation';
import '../../Style/Main.css';
import Logo from './Logo';

export default function Main(props) {
  const history = useHistory();
  const portfolioButton = () => {
    history.push('/portfolio');
  };

  return (
    <div className="Main">
      <div className="Title">
        <Typing hideCursor speed={100}>
          <h1>Hi!</h1>
          <Typing.Delay ms={500} />
          <h2>My name is</h2>
          <h1>Igor.</h1>
        </Typing>
      </div>
      <div
        className="logo"
        onClick={portfolioButton}
        onKeyDown={portfolioButton}
        role="button"
        tabIndex={0}
      >
        <Logo />
      </div>
    </div>
  );
}

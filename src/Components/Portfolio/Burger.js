import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { getFirebase } from "../../firebase";
import Spinner from "../UI/Spinner/Spinner";
import ErrorMessage from "../UI/ErrorMessage";
export default function Burger() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(false);
  const slide = useSpring({
    opacity: 1,
    marginTop: 0,
    delay: 400,
    from: {
      opacity: 0,
      marginTop: 50
    }
  });
  useEffect(() => {
    getFirebase()
      .database()
      .ref("/projects")
      .orderByChild("dateFormatted")
      .once("value")
      .then(snapshot => {
        const loadedData = [];
        const snapshotVal = snapshot.val();
        for (let id in snapshotVal) {
          loadedData.push(snapshotVal[id]);
        }
        const newestFirst = loadedData.reverse();
        setCards(newestFirst);
        setLoading(false);
      })
      .catch(error => setError(true));
  }, []);

  let card = cards.map(card => (
    <div className="Card" key={card.title}>
      <section>
        <h2>{card.title}</h2>
        <p>{card.p1}</p>
        <p>{card.p2}</p>
        <p>
          Check it out
          <a href={card.link} target="_blank" rel="noopener noreferrer">
            here.
          </a>
        </p>
      </section>
      <div className="Image">
        <animated.img src={card.img} alt={card.alt} style={slide} />
      </div>
    </div>
  ));

  if (loading) {
    card = <Spinner />;
  }
  if (error) {
    card = <ErrorMessage />;
  }

  return (
    <div className="Portfolio">
      <div className="Touch">
        <h1>My Work</h1>
      </div>
      {card}
      <br />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import axios from "axios";
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
    setLoading(true);
    const graphqlQuery = {
      query: `
        {
        projects {
          id
          title
          p1
          p2
          img
          link
          alt
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
        const loadedData = response.data.data.projects.reverse();
        setCards(loadedData);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  let card = cards.map(card => (
    <div className="Card" key={card.id}>
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

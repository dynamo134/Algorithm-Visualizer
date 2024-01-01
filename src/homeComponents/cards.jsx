import React, { useState, useEffect } from 'react';
import ImgMediaCard2 from "./card2";
import "./style.css";
import { Link } from "react-router-dom";
import { getDetails } from "./cardDetails";
import TextField from "@material-ui/core/TextField";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setCards(getDetails());
  }, []); // Empty dependency array ensures that useEffect runs only once on mount

  const getData = (e) => {
    setFilter(e.target.value);
  };

  return (
    <React.Fragment>
       {/* The getData function is called when the value of the search input field changes.
        It updates the filter state with the current value of the input field. */}
      <div className="d-flex justify-content-end Cards "> 
        <TextField //Material UI Search field
          id="standard-basic"
          label="Search"
          color="white"
          onChange={getData}
        />
      </div>
      
      <div className="d-flex flex-wrap justify-content-center Cards p-lg-5">
        {cards
          .filter(
            (card) =>
              card.title.toLowerCase().includes(filter.toLowerCase()) ||
              card.description.toLowerCase().includes(filter.toLowerCase())
          )
          .map((card) => (
            <div key={card.id}>
              <ImgMediaCard2
              className="d-flex flex-wrap" card={card} /> 
               {/*The ImgMediaCard2 component is used to render the card, and the card details are passed as a prop (card). */}
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default Cards;

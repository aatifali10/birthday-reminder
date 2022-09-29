import React from "react";
// import data from "./Data";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, Image } = person;
        return (
          <article className="cards" key={id}>
            <img src={Image} alt={name} />
            <h2>{name}</h2>
            <p>{age}years</p>
          </article>
        );
      })}
    </>
  );
};

export default List;

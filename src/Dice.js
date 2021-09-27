import React from 'react';
import './Dice.css';

export const Dice = (props) => {
  const randomDice = props.randomDice;

  return (
    <>
      <section className="Dice">
        <i class={'fas fa-dice-' + randomDice + ' fa-2x'}></i>
      </section>
    </>
  );
};

Dice.defaultProps = {
  randomDice: 'one',
};

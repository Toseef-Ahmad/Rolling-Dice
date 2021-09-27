import React, { useState } from 'react';
import { Dice } from './Dice';
import { Button } from './Button';
import './RollDice.css';

export const RollDice = () => {
  const [randomDiceOne, setRandomDiceOne] = useState('one');
  const [randomDiceTwo, setRandomDiceTwo] = useState('one');
  const [shaking, setShaking] = useState(false);
  const [rolling, setRolling] = useState(false);

  const possibleMoves = ['one', 'two', 'three', 'four', 'five', 'six'];

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const roll = () => {
    setRolling(true);
    setShaking(true);
    myPromise.then(() => {
      setRandomDiceOne(possibleMoves[Math.floor(Math.random() * 6)]);
      setRandomDiceTwo(possibleMoves[Math.floor(Math.random() * 6)]);
      setShaking(false);
      setRolling(false);
    });
  };

  return (
    <>
      <div className={shaking && 'ShakeDice'}>
        <section className={'DisplayFlex'}>
          <Dice randomDice={randomDiceOne} />
          <Dice randomDice={randomDiceTwo} />
        </section>
      </div>
      <section>
        <Button roll={roll} rolling={rolling} />
      </section>
    </>
  );
};

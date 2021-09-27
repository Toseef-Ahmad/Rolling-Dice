import React from 'react';
import './Button.css';

export const Button = (props) => {
  const handleClick = () => {
    props.roll();
  };
  const rolling = props.rolling;
  return (
    <>
      <button disabled={rolling} className="Button" onClick={handleClick}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </>
  );
};

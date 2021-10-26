import React from "react";

export default function Lesson17() {
  let [number1, setNumber1] = React.useState(1);
  let [number2, setNumber2] = React.useState(2);

  function incrementNumbersBy2() {
    // setTimeout(() => {
      setNumber1(number1 + 1);
      setNumber2(number2 + 2);
    // }, 100);
  }

  return (
    <>
      {console.log("rendered")}
      <div>{`${number1} + ${number2} = ${number1 + number2}`}</div>
      <button type="button" onClick={incrementNumbersBy2}>
        Increment all numbers by 2
      </button>
    </>
  );
}

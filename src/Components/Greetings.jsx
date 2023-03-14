import React  from "react";

export default function Greetings() {

  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <div onClick={handleClick}>
        Hi, My name is <span>Fisayo</span>
      </div>
    </>
  );
}

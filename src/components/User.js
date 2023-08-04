import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count1] = useState(1);
  const { name, location } = props;
  return (
    <div className="user-card">
      <h1>
        count: {count}
        <button   type="button" className="count" onClick={() => {setCount(count+ 1)}}>
         Incease Count
        </button>
        <button   type="button" className="count" onClick={() => {setCount(count- 1)}}>
         Decrease Count
        </button>
      </h1>
      <h1>count: {count1}</h1>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h3>Contact: "abc@gmail.com"</h3>
    </div>
  );
};

export default User;

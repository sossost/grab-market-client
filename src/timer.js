import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("component update");
  function updateTime() {
    setTime(time + 1);
  }
  return (
    <div>
      <h3>{time}초</h3>
      <button onClick={updateTime}>1씩 올려주세요</button>
    </div>
  );
}
export default TimerComponent;

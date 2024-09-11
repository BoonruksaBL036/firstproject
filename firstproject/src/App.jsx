import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Post from "./Post";
import profile from "./assets/profile.jpeg";
import StateInClass from "./StateInClass";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Post profile={profile} />
        <Card profile={profile} />
        <Card profile={profile} />
        <Card />
        <StateInClass name="Boonruksa" />
        <profile />
      </div>
    </>
  );
}

export default App;

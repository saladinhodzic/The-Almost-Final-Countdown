import { useState, useRef } from "react";

export default function Player() {
  const lastPlayerName = useRef();
  const [playerName, setPlayerName] = useState(null);

  const handleSubmit = () => {
    setPlayerName(lastPlayerName.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={lastPlayerName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}

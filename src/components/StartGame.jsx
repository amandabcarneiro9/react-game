import { useState } from "react";
import Game from "./Game";

export default function StartGame() {
  const [isPlaying, setIsPlaying] = useState(false);

  function start() {
    setIsPlaying(true);
  }
  return (
    <div>
      {!isPlaying && <button onClick={start}>Start</button>}
      {isPlaying && <Game />}
    </div>
  );
}

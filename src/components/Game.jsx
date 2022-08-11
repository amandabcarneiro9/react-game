import Options from "./Options";

const elements = ["rock", "paper", "scissor"];

export default function Game() {
  function computerPlay() {
    const randomIndex = Math.floor(Math.random() * elements.length);
    return elements[randomIndex];
  }

  function playerChoice() {
    function onChoose(choice) {
      console.log(choice);
    }
    return (
      <div>
        {elements.map((element) => (
          <Options key={element} name={element} onChoose={onChoose} />
        ))}
      </div>
    );
  }
  return playerChoice();
}

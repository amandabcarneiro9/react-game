export default function Options({ name, onChoose }) {
  function makeChoice() {
    onChoose(name);
  }
  return <button onClick={makeChoice}>{name}</button>;
}

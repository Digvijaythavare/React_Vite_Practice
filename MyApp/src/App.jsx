import "./App.css";
import Hello from "./Hello";
import Bye from "./Bye";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      <h1>React Vite</h1>
      <Hello />
      <Bye/>
      <img src={reactLogo} width="200" />
    </>
  );
}

export default App;

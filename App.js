import CountDown from "./src/countDown"
import ColorBox from "./src/colorBox"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountDown seconds={30}></CountDown>
        <ColorBox color="deeppink" />
        <ColorBox color="dreen" />
      </header>
    </div>
  );
}


export default App()
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      {initialColors.map((color) => (
        <Color
          style={{ backgroundColor: color.hex }}
          hex={color.hex}
          role={color.role}
          contrastsText={color.contrastText}
          key={color.id}
        />
      ))}
    </>
  );
}

export default App;

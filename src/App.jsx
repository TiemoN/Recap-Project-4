import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { ColorForm } from "./Components/Color/ColorForm";
import { useState } from "react";

function App() {
  let [colors, setColors] = useState(initialColors);
  let [roleInput, setRoleInput] = useState("");
  let [hexInput, setHexInput] = useState("#123456");
  let [contrastInput, setContrastInput] = useState("#ffffff");

  function handleChangeRole(event) {
    setRoleInput(event.target.value);
  }
  function handleChangeHex(event) {
    setHexInput(event.target.value);
  }
  function handleChangeContrast(event) {
    setContrastInput(event.target.value);
  }

  function Click(event) {
    event.preventDefault();
    const newColor = {
      id: Date.now().toString(),
      role: roleInput,
      hex: hexInput,
      contrast: contrastInput,
      contrastText: contrastInput,
    };
    setColors([newColor, ...colors]);

    setContrastInput("#ffffff");
    setHexInput("#123456");
    setRoleInput("some color");
  }

  function DeleteButton(id) {
    console.log("deleting id", id);
    setColors((prevColors) => {
      const filtered = prevColors.filter(
        (color) => String(color.id) !== String(id),
      );
      console.log("New list will be:", filtered);
      return filtered;
    });
  }

  return (
    <>
      <h1>Theme Creator</h1>

      {
        <ColorForm
          click={Click}
          role={roleInput}
          hex={hexInput}
          contrast={contrastInput}
          changeRole={handleChangeRole}
          changeHex={handleChangeHex}
          changeContrast={handleChangeContrast}
        />
      }

      {colors.map((color) => (
        <Color
          styleText={{ color: color.contrastText }}
          styleRole={{ color: color.contrastText }}
          styleColor={{ backgroundColor: color.hex }}
          hex={color.hex}
          role={color.role}
          contrastsText={color.contrastText}
          key={color.id}
          clickDelete={() => DeleteButton(color.id)}
        />
      ))}
    </>
  );
}

export default App;

import "./ColorForm.css";

export function ColorForm({
  click,
  role,
  hex,
  contrast,
  changeRole,
  changeHex,
  changeContrast,
}) {
  return (
    <form className="wrapper">
      <label htmlFor="role">role</label>
      <input
        id="role"
        type="text"
        value={role}
        placeholder={role}
        onChange={changeRole}
      />
      <label htmlFor="Hex">Hex</label>
      <input
        id="Hex"
        type="text"
        value={hex}
        placeholder={hex}
        onChange={changeHex}
      />
      <input
        id="Hex"
        type="color"
        value={hex}
        placeholder={hex}
        onChange={changeHex}
      />
      <label htmlFor="Contrast">Contrast Text</label>
      <input
        id="Contrast"
        type="text"
        value={contrast}
        placeholder={contrast}
        onChange={changeContrast}
      />
      <input
        id="Contrast"
        type="color"
        value={contrast}
        placeholder={contrast}
        onChange={changeContrast}
      />
      <button type="submit" onClick={click}>
        Add Color
      </button>
    </form>
  );
}

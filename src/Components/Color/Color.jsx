import "./Color.css";

export default function Color({ hex, role, contrastsText, id, style }) {
  return (
    <section className="color-card" style={style} id={id}>
      <p className="color-card-headline">{hex}</p>
      <p>{role}</p>
      <p>Contrasts: {contrastsText} </p>
    </section>
  );
}

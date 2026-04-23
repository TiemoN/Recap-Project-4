import "./Color.css";

export default function Color({
  hex,
  role,
  contrastsText,

  styleColor,
  styleText,
  styleRole,
  clickDelete,
}) {
  return (
    <section className="color-card" style={styleColor}>
      <p className="color-card-headline">{hex}</p>
      <p style={styleRole}>{role}</p>
      <p style={styleText}>Contrasts: {contrastsText} </p>
      <button onClick={clickDelete}>Delete</button>
    </section>
  );
}

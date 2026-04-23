import "./Color.css";

export default function Color({
  hex,
  role,
  contrastsText,
  id,
  styleColor,
  styleText,
  styleRole,
}) {
  return (
    <section className="color-card" style={styleColor} id={id}>
      <p className="color-card-headline">{hex}</p>
      <p style={styleRole}>{role}</p>
      <p style={styleText}>Contrasts: {contrastsText} </p>
    </section>
  );
}

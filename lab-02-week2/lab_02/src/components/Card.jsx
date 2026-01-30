function Card({ title, children, className }) {
  return (
    <article className={`card ${className ? className : ""}`}>
      <h3>{title}</h3>
      {children}
    </article>
  );
}

export default Card;

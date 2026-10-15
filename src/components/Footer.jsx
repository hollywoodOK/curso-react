const teamMembers = [
  { name: "J.V.", role: "Apasionado por las ideas" },
  { name: "A.V.", role: "Aterrizaje lógico" },
  { name: "M.V.", role: "Pensar en lo que harás" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-about">
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden="true">T</span>
            <span>T de Tienda</span>
          </div>
          <p>Una tienda de práctica con cosas prácticas.</p>
          <a href="mailto:contacto@mitienda.example">contacto@tdetienda.com</a>
        </div>
        <div className="footer-team">
          <h2>Quienes somos</h2>
          <div className="team-cards">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.name}>
                <span className="team-avatar" aria-hidden="true">{member.name.slice(-1)}</span>
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="team-note">El equipo que hace equipo.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">© {new Date().getFullYear()} T de Tienda · Una... Tienda</div>
      </div>
    </footer>
  );
}

export default Footer;

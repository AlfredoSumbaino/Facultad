const Contacto = () => {
  return (
    <div className="contact-container">
      <h2>📞 Contacto</h2>
      <div className="contact-info">
        <h3>¿Quieres saber más sobre nuestras recetas?</h3>
        <h3>¿Eres chef y quieres colaborar con nosotros?</h3>
        <p>No dudes en contactarnos:</p>
        <div className="contact-details">
          <p>📧 <strong>Email:</strong> contacto@recetariodigital.com</p>
          <p>📱 <strong>Teléfono:</strong> +54 11 3245-6789</p>
          <p>📍 <strong>Dirección:</strong> Av. Gastronómica 123, Buenos Aires</p>
          <p>🕒 <strong>Horario:</strong> Lunes a Viernes 9:00 - 18:00</p>
        </div>
        <div className="social-media">
          <h4>Síguenos en redes sociales:</h4>
          <p>🔗 Instagram: @recetariodigital</p>
          <p>🔗 Facebook: Recetario Digital</p>
          <p>🔗 YouTube: Canal Recetario Digital</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

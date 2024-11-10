document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Evita el envío tradicional del formulario

    // Obtiene los valores del formulario
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Número de WhatsApp destinatario
    const whatsappNumber = "+573217497380"; // Incluye el código de país

    // Construye el mensaje de WhatsApp
    const whatsappMessage = `Hola, mi nombre es ${name}. Mi teléfono es ${phone}. Mensaje: ${message}`;

    // Codifica el mensaje para incluirlo en el enlace de WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Genera el enlace de WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abre el enlace en una nueva pestaña
    window.open(whatsappURL, "_blank");
});

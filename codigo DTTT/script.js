const form = document.querySelector("#orderForm");

function buildWhatsAppMessage() {
  const name = document.querySelector("#customerName").value.trim();
  const orderType = document.querySelector("#orderType").value;
  const flavor = document.querySelector("#flavor").value;
  const details = document.querySelector("#details").value.trim();

  const parts = [
    "Hola, quiero agendar un pedido de Dulce Tentación.",
    name ? `Mi nombre es ${name}.` : "",
    `Me interesa: ${orderType}.`,
    `Sabor: ${flavor}.`,
    details ? `Detalles: ${details}.` : "Quisiera consultar disponibilidad, precios y entrega."
  ].filter(Boolean);

  return parts.join(" ");
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const encodedMessage = encodeURIComponent(buildWhatsAppMessage());
  window.open(`https://wa.me/50768433054?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
});

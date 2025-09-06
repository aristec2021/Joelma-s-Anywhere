document.addEventListener("DOMContentLoaded", () => {
  // ano no rodapé
  document.getElementById("ano").textContent = new Date().getFullYear();

  // envio do formulário
  document.getElementById("form-contato").addEventListener("submit", e => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  });

  // animações de slide ao rolar
  const slides = document.querySelectorAll(".slide");
  const aparecer = () => {
    const altura = window.innerHeight;
    slides.forEach(sec => {
      const pos = sec.getBoundingClientRect().top;
      if (pos < altura - 100) sec.classList.add("show");
    });
  };
  window.addEventListener("scroll", aparecer);
  aparecer();
});

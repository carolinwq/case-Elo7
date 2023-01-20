var javaScriptDesativado = document.getElementById("javascript-desativado");
javaScriptDesativado.innerHTML = "";

document.addEventListener("DOMContentLoaded", () => {
  async function fetchData() {
    const response = await fetch(
      "http://www.mocky.io/v2/5d6fb6b1310000f89166087b"
    );
    const data = await response.json();
    var vagasTotais = data.vagas;
    var vagasDisp = vagasTotais.filter((a) => a.ativa === true);

    var vagasArea = document.getElementById("vagas-area");
    vagasArea.innerHTML = "Desenvolvimento";

    vagasDisp.forEach(function (vagas) {
      var ulVagas = document.getElementById("vagas-disponiveis");
      var liVagas = document.createElement("li");
      var h3Vagas = document.createElement("h3");
      var aVagas = document.createElement("a");
      var spanVagas = document.createElement("span");

      aVagas.innerHTML = vagas.cargo;
      aVagas.style.cssText += "color:rgb(100, 153, 153);font-weight: 700";
      aVagas.href = `${vagas.link}`;
      if (vagas.localizacao === undefined) {
        spanVagas.innerHTML = "Remoto";
      } else {
        spanVagas.innerHTML = `${vagas.localizacao.bairro} - ${vagas.localizacao.cidade}, ${vagas.localizacao.pais} `;
      }

      ulVagas.appendChild(liVagas);
      liVagas.appendChild(h3Vagas);
      h3Vagas.appendChild(aVagas);
      liVagas.appendChild(spanVagas);
    });
  }

  fetchData();
});

function scrollInit() {
  ScrollReveal().reveal(".nosso-time-imagem-1", { duration: 2000, delay: 200 });
  ScrollReveal().reveal(".nosso-time-imagem-2", { duration: 2000, delay: 300 });
  ScrollReveal().reveal(".nosso-time-imagem-3", { duration: 2000, delay: 400 });
  ScrollReveal().reveal(".nosso-time-imagem-4", { duration: 2000, delay: 500 });
}
scrollInit();

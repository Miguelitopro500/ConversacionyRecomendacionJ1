// Guardar nombre de usuario
function guardarUsuario() {
  const username = document.getElementById("username").value.trim();
  if (username) {
    localStorage.setItem("nombreUsuario", username);
    document.getElementById("nombreGuardado").textContent = "Tu nombre guardado: " + username;
  }
}

// Mostrar nombre si ya está guardado
window.onload = function () {
  const nombre = localStorage.getItem("nombreUsuario");
  if (nombre) {
    document.getElementById("nombreGuardado").textContent = "Tu nombre guardado: " + nombre;
  }
  mostrarMensajes();
  mostrarRecomendaciones();
}

// Enviar mensaje al chat
function enviarMensaje() {
  const mensaje = document.getElementById("mensajeInput").value.trim();
  const nombre = localStorage.getItem("nombreUsuario") || "Anónimo";
  if (mensaje) {
    let mensajes = JSON.parse(localStorage.getItem("chat") || "[]");
    mensajes.push(`${nombre}: ${mensaje}`);
    localStorage.setItem("chat", JSON.stringify(mensajes));
    document.getElementById("mensajeInput").value = "";
    mostrarMensajes();
  }
}

// Mostrar mensajes del chat
function mostrarMensajes() {
  const mensajes = JSON.parse(localStorage.getItem("chat") || "[]");
  document.getElementById("mensajes").innerHTML = mensajes.map(m => `<p>${m}</p>`).join("");
}

// Enviar recomendación
function enviarRecomendacion() {
  const rec = document.getElementById("recomendacionInput").value.trim();
  const nombre = localStorage.getItem("nombreUsuario") || "Anónimo";
  if (rec) {
    let recomendaciones = JSON.parse(localStorage.getItem("recomendaciones") || "[]");
    recomendaciones.push({ usuario: nombre, texto: rec });
    localStorage.setItem("recomendaciones", JSON.stringify(recomendaciones));
    document.getElementById("recomendacionInput").value = "";
    mostrarRecomendaciones();
  }
}

// Mostrar recomendaciones
function mostrarRecomendaciones() {
  const recomendaciones = JSON.parse(localStorage.getItem("recomendaciones") || "[]");
  let html = "<ul>";
  recomendaciones.forEach(rec => {
    html += `<li><strong>${rec.usuario}:</strong> ${rec.texto}</li>`;
  });
  html += "</ul>";
  document.getElementById("listaRecomendaciones").innerHTML = html;
}


function guardarNoticia() {
  const contenidoHTML = document.getElementById("noticiaInput").value.trim();
  if (contenidoHTML) {
    localStorage.setItem("noticiaHTML", contenidoHTML);
    mostrarNoticia();
    document.getElementById("noticiaInput").value = "";
  }
}

function mostrarNoticia() {
  const noticia = localStorage.getItem("noticiaHTML") || "<p>No hay noticias publicadas aún.</p>";
  document.getElementById("noticiaPublicada").innerHTML = noticia;
}


window.onload = function () {
  // ...otras funciones como mostrarMensajes()
  mostrarNoticia();
};

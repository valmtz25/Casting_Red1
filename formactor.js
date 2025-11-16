// js/formActor.js
import { subirFoto } from 'subirFoto.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Configuración Firebase
const firebaseConfig = { 
  apiKey: "AIzaSyBQmYwkqr29lvaF8ew3BJ2suc5UxRaVU1Y",
  authDomain: "castingred-a6f6e.firebaseapp.com",
  projectId: "castingred-a6f6e",
  storageBucket: "castingred-a6f6e.appspot.com",
  messagingSenderId: "61701399093",
  appId: "1:61701399093:web:678b77ff06ce83e1a1077c",
  measurementId: "G-J1QPG9HXGZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Formulario
const formActor = document.getElementById("formActor");

formActor.addEventListener("submit", async (e) => {
  e.preventDefault();

  const file = document.getElementById("fotoActor").files[0];
  const fotoURL = await subirFoto(file);
  if (!fotoURL) return alert("No se pudo subir la foto");

  const actor = {
    nombreCompleto: document.getElementById("nombreCompleto").value,
    edad: Number(document.getElementById("edad").value),
    genero: document.getElementById("genero").value,
    telefono: document.getElementById("telefono").value,
    correo: document.getElementById("correo").value,
    experiencia: document.getElementById("experiencia").value,
    rolPreferido: document.getElementById("rolPreferido").value,
    portafolioDigital: document.getElementById("portafolioDigital").value,
    foto: fotoURL
  };

  try {
    await addDoc(collection(db, "actores"), actor);
    alert("Actor registrado correctamente");
    formActor.reset();
  } catch (err) {
    console.error("Error guardando actor:", err);
    alert("Error al registrar actor");
  }
});

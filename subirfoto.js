// js/subirFoto.js
export const subirFoto = async (file) => {
  if (!file) return null;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "preset_castingred"); // tu preset de Cloudinary

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkd987yp8/image/upload", // reemplaza con tu cloud name
      { method: "POST", body: formData }
    );
    const data = await res.json();
    return data.secure_url; // URL de la foto subida
  } catch (err) {
    console.error("Error subiendo la foto:", err);
    return null;
  }
};

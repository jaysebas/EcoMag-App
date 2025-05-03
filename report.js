document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nombre = form.querySelector("input[placeholder='Nombre completo']").value;
      const tipo = form.querySelector("input[placeholder='Tipo de residuo (plástico, orgánico, etc.)']").value;
      const ubicacion = form.querySelector("input[placeholder='Ubicación (barrio, dirección, etc.)']").value;
      const descripcion = form.querySelector("textarea").value;
  
      const nuevoReporte = {
        nombre,
        tipo,
        ubicacion,
        descripcion,
        fecha: new Date().toLocaleString()
      };
  
      let reportes = JSON.parse(localStorage.getItem("reportes")) || [];
      reportes.push(nuevoReporte);
      localStorage.setItem("reportes", JSON.stringify(reportes));
  
      alert("¡Reporte enviado exitosamente!");
      form.reset();
    });
  });
  
document.getElementById("downloadBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "/CV/Curriculum vitae - Michał Pawłowski.pdf";
  link.download = "CV-MichałPawłowski.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});



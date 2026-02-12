document.getElementById("modForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const reason = document.getElementById("reason").value;
  const country = document.getElementById("country").value;

  // Test-Ausgabe im Browser (da keine echte API)
  const status = document.getElementById("status");
  status.textContent = `Submitted! Name: ${name}, Reason: ${reason}, Country: ${country}`;

  // Download starten
  const link = document.createElement("a");
  link.href = "mc-mod.zip"; // <- deine Test-Mod-Datei
  link.download = "mc-mod.zip";
  link.click();

  // Optional Formular zurücksetzen
  document.getElementById("modForm").reset();
});

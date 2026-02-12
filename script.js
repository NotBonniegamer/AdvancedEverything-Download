document.getElementById("modForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    reason: document.getElementById("reason").value,
    country: document.getElementById("country").value
  };

  try {
    // 👉 HIER später deine API/Webhook-Bridge einsetzen
    await fetch("https://your-api-endpoint/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

  } catch (err) {
    console.log("Send failed (placeholder endpoint)");
  }

  // ✅ Download starten
  const link = document.createElement("a");
  link.href = "mc-mod.zip"; // <- deine Mod-Datei
  link.download = "mc-mod.zip";
  link.click();
});

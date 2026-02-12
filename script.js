const webhook = "PASTE_YOUR_DISCORD_WEBHOOK_HERE";

document.getElementById("modForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const reason = document.getElementById("reason").value;
  const country = document.getElementById("country").value;

  const message = {
    content:
`📩 **New Mod Request**
👤 Name: ${name}
📝 Reason: ${reason}
🌍 Country: ${country}`
  };

  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    });

    document.getElementById("status").textContent = "✅ Sent to Discord!";
  } catch {
    document.getElementById("status").textContent = "❌ Failed to send.";
  }

  // Download starten
  const link = document.createElement("a");
  link.href = "mc-mod.zip"; // deine Datei
  link.download = "mc-mod.zip";
  link.click();

  document.getElementById("modForm").reset();
});

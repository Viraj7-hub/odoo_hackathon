

document.addEventListener("DOMContentLoaded", () => {
  // Temporary mock values (replace with state.js / backend later)
  const activeFleet = 220;
  const inMaintenance = 18;
  const utilization = 82;

  // Select KPI cards
  const kpiCards = document.querySelectorAll(".kpis .card");

  if (kpiCards.length >= 3) {
    kpiCards[0].innerHTML = `Active Fleet<br><strong>${activeFleet}</strong>`;
    kpiCards[1].innerHTML = `In Maintenance<br><strong>${inMaintenance}</strong>`;
    kpiCards[2].innerHTML = `Utilization<br><strong>${utilization}%</strong>`;
  }

  console.log("Dashboard loaded successfully");
});
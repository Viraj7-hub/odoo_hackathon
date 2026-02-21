// js/analytics.js

const fuelCtx = document.getElementById("fuelChart");
const costCtx = document.getElementById("costChart");

new Chart(fuelCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [{
      label: "Fuel Cost (₹)",
      data: [12000, 18000, 15000, 22000],
      borderColor: "#4f9cff",
      tension: 0.4
    }]
  }
});

new Chart(costCtx, {
  type: "bar",
  data: {
    labels: ["Truck-01", "Truck-02", "Van-01"],
    datasets: [{
      label: "Total Cost (₹)",
      data: [50000, 72000, 43000],
      backgroundColor: "#22ffd2"
    }]
  }
});
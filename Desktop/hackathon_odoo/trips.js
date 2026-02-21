// js/trips.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("tripForm");
  const tableBody = document.querySelector("#tripTable tbody");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const vehicle = document.getElementById("vehicle").value;
    const cargo = document.getElementById("cargo").value;
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${vehicle}</td>
      <td>${cargo} kg</td>
      <td>${origin} → ${destination}</td>
      <td>
        <span class="pill orange">Dispatched</span>
      </td>
    `;

    tableBody.appendChild(row);
    form.reset();
  });

  console.log("Trips page loaded successfully");
});
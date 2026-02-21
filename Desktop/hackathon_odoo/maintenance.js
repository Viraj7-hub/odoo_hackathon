// js/maintenance.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("maintenanceForm");
  const tableBody = document.querySelector("#maintenanceTable tbody");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const vehicleId = document.getElementById("vehicleId").value;
    const issue = document.getElementById("issue").value;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${vehicleId}</td>
      <td>${issue}</td>
      <td>
        <span class="pill red">In Service</span>
      </td>
    `;

    tableBody.appendChild(row);
    form.reset();
  });

  console.log("Maintenance page loaded successfully");
});
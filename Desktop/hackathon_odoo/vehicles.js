// js/vehicles.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("vehicleForm");
  const tableBody = document.querySelector("#vehicleTable tbody");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const plate = document.getElementById("plate").value;
    const capacity = document.getElementById("capacity").value;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${plate}</td>
      <td>${capacity} kg</td>
      <td>
        <span class="pill green">Available</span>
      </td>
    `;

    tableBody.appendChild(row);
    form.reset();
  });

  console.log("Vehicle registry loaded successfully");
});
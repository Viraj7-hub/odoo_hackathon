// js/expenses.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("expenseForm");
  const tableBody = document.querySelector("#expenseTable tbody");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const tripId = document.getElementById("tripId").value;
    const fuel = Number(document.getElementById("fuelCost").value);
    const misc = Number(document.getElementById("miscCost").value);
    const total = fuel + misc;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${tripId}</td>
      <td>₹${fuel}</td>
      <td>₹${misc}</td>
      <td><strong>₹${total}</strong></td>
    `;

    tableBody.appendChild(row);
    form.reset();
  });

  console.log("Expenses page loaded successfully");
});
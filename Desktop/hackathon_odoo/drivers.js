// js/drivers.js

document.addEventListener("DOMContentLoaded", () => {
  // Temporary mock data (replace with state.js / backend later)
  const drivers = [
    { name: "John Doe", safety: 89, status: "Available" },
    { name: "Alex Kumar", safety: 92, status: "On Trip" },
    { name: "Rahul Singh", safety: 76, status: "Suspended" }
  ];

  const tableBody = document.querySelector("#driverTable tbody");

  drivers.forEach(driver => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${driver.name}</td>
      <td>${driver.safety}%</td>
      <td>
        <span class="pill ${
          driver.status === "Available" ? "green" :
          driver.status === "On Trip" ? "orange" : "red"
        }">
          ${driver.status}
        </span>
      </td>
    `;

    tableBody.appendChild(row);
  });

  console.log("Drivers page loaded successfully");
});
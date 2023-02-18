const visitNumber = parseInt(window.localStorage.getItem("visits") || 0);
const visitMessage = `Number of visits: ${visitNumber + 1}`;
document.querySelector("#visits").textContent = visitMessage;
localStorage.setItem("visits", visitNumber + 1);
// index.js
const display = document.getElementById("display");
const history = document.getElementById("history");
const buttons = document.querySelectorAll(".key");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;
    const action = btn.dataset.action;

    if (action === "clear") {
      display.textContent = "0";
      history.textContent = "";
    } else if (action === "back") {
      display.textContent =
        display.textContent.length > 1 ? display.textContent.slice(0, -1) : "0";
    } else if (action === "equals") {
      try {
        const result = eval(display.textContent);
        history.textContent = display.textContent + " =";
        display.textContent = result;
      } catch {
        display.textContent = "Error";
      }
    } else if (action === "percent") {
      display.textContent = String(parseFloat(display.textContent) / 100);
    } else {
      // ถ้าเป็นค่าเริ่มต้น "0" ให้แทนที่ด้วยค่าที่กดใหม่
      display.textContent =
        display.textContent === "0" ? value : display.textContent + value;
    }
  });
});
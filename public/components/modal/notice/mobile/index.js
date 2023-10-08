const model = document.getElementById("model");
const wrapper = document.getElementById("wrapper");
const container = document.getElementById("container");

const closeButton = document.getElementById("close");
const acceptButton = document.getElementById("accept");

function showWrapper() {
  model.classList.remove("show");
  model.classList.add("hidden");
  wrapper.classList.remove("transparent");
  container.style.backgroundColor = "white";
}

function showModal() {
  container.style.backgroundColor = "#1d1d1d";
  wrapper.classList.add("transparent");
  model.classList.remove("hidden");
  model.classList.add("show");
}

model.addEventListener("click", () => showWrapper());
closeButton.addEventListener("click", () => showModal());
acceptButton.addEventListener("click", () => showModal());

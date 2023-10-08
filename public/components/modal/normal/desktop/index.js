const model = document.getElementById("model");
const wrapper = document.getElementById("wrapper");

const closeButton = document.getElementById("close");
const acceptButton = document.getElementById("accept");
const declineButton = document.getElementById("decline");

function showWrapper() {
  model.classList.remove("show");
  model.classList.add("hidden");
  wrapper.classList.remove("hidden");
  wrapper.classList.add("show");
}

function showModal() {
  wrapper.classList.remove("show");
  wrapper.classList.add("hidden");
  model.classList.remove("hidden");
  model.classList.add("show");
}

model.addEventListener("click", () => showWrapper());
closeButton.addEventListener("click", () => showModal());
acceptButton.addEventListener("click", () => showModal());
declineButton.addEventListener("click", () => showModal());

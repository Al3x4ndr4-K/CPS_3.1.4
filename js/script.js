document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton")
  const container = document.querySelector(".service__description-container")
  const buttonText = toggleButton.querySelector(
    ".service__description_expand-text"
  )

  toggleButton.addEventListener("click", function () {
    container.classList.toggle("expanded")
    toggleButton.classList.toggle("expanded")
    if (container.classList.contains("expanded")) {
      buttonText.textContent = "Скрыть"
    } else {
      buttonText.textContent = "Читать далее"
    }
  })
})

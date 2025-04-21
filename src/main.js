import './styles/main.scss';

  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("open-modal");
  const closeBtn = document.getElementById("close-modal");
  const burger = document.getElementById('burger');
  const header = document.querySelector('header');

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Закрытие при клике вне контента
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  burger.addEventListener('click', () => {
    header.classList.toggle('open');
  });


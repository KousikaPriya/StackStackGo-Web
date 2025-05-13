function toggleDarkMode() {
  const body = document.body;
  const button = document.querySelector('.theme-toggle');
  body.classList.toggle('dark-mode');
  button.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

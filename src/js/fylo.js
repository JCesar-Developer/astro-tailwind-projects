const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  themeToggleLightIcon.classList.remove('hidden')
} else {
  themeToggleDarkIcon.classList.remove('hidden')
}

themeToggleBtn.addEventListener('click', toggleMode)

function toggleMode() {
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  const currentTheme = localStorage.getItem('color-theme');
  const isDark = currentTheme ? currentTheme === 'dark' : document.documentElement.classList.contains('dark');

  document.documentElement.classList.toggle('dark', !isDark);
  localStorage.setItem('color-theme', isDark ? 'light' : 'dark');
}
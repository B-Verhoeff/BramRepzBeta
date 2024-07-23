document.getElementById('theme-switcher').addEventListener('click', function () {
    var body = document.body;
    var themeSwitcher = document.getElementById('theme-switcher');
    
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      themeSwitcher.textContent = 'Switch to Light Theme';
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      themeSwitcher.textContent = 'Switch to Dark Theme';
    }
  });
  
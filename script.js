document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. Dark Mode Toggle
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');

  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add('dark-mode');
    if (themeToggleBtn) themeToggleBtn.textContent = '☀️ Light Mode';
  } else {
    if (themeToggleBtn) themeToggleBtn.textContent = '🌙 Dark Mode';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');

      themeToggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // ==========================================
  // 2. Secret Vault Panel Logic
  // ==========================================
  const trigger = document.getElementById('vault-trigger');
  const closeBtn = document.getElementById('vault-close');
  const vault = document.getElementById('secret-vault');
  const overlay = document.getElementById('vault-overlay');

  function openVault() {
    if (vault && overlay) {
      vault.classList.remove('hidden');
      overlay.classList.remove('hidden');
      vault.setAttribute('aria-hidden', 'false');
    }
  }

  function closeVault() {
    if (vault && overlay) {
      vault.classList.add('hidden');
      overlay.classList.add('hidden');
      vault.setAttribute('aria-hidden', 'true');
    }
  }

  if (trigger) trigger.addEventListener('click', openVault);
  if (closeBtn) closeBtn.addEventListener('click', closeVault);
  if (overlay) overlay.addEventListener('click', closeVault);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && vault && !vault.classList.contains('hidden')) {
      closeVault();
    }
  });

  // Hotkey: Ctrl + Shift + S
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 's') {
      e.preventDefault();
      if (vault) {
        if (vault.classList.contains('hidden')) {
          openVault();
        } else {
          closeVault();
        }
      }
    }
  });

  // ==========================================
  // 3. Login gate — DISABLED FOR NOW
  // The Firebase Auth backend on linux-tgs isn't
  // provisioned yet, so the site is left open.
  // login.html + lore-auth-config.js stay parked
  // for re-enabling the gate once Firebase behaves.
  // ==========================================

  // Safety: in case a visitor's cached HTML still runs the old hiding gate
  document.documentElement.style.removeProperty('visibility');
});
# 🐧 Linux Lore

**System Internals & OS Images** — a terminal-inspired static blog that teaches Linux fundamentals: process control, filesystem philosophy, sudo, zombie processes, dual-booting, and more.

**🔗 Live site: <https://linux-edu.web.app>**

## Pages

| Page | Topic |
|---|---|
| `index.html` | Home — article index with hero |
| `bash-command.html` | What actually happens when you type a command into bash |
| `proc.html` | The `/proc` filesystem |
| `everything-is-a-file.html` | "Everything is a file" philosophy |
| `sudo.html` | How `sudo` really works |
| `zombie-processes.html` | Zombie processes explained |
| `dual-boot.html` | Dual-booting Linux |
| `os-images.html` | Choosing & flashing OS images |
| `secret-vault.html` | Hidden easter-egg vault (Ctrl+Shift+S) |
| `login.html` | Hacker-terminal login page *(auth currently parked — Firebase Auth backend pending setup on the project)* |

## Stack

- Pure static HTML / CSS / vanilla JS — no build step
- Terminal-inspired theme: Space Grotesk + Inter + JetBrains Mono, emerald-on-dark palette, terminal-window code blocks
- Deployed with **Firebase Hosting** (`linux-edu.web.app`)
- `styles.css` / `script.js` are cache-busted via `?v=N` query params — bump these when editing

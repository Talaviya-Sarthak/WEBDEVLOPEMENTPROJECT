// Responsive Navbar Toggle
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');
const navbarBackdrop = document.querySelector('.navbar-backdrop');
const closeNavbar = document.querySelector('.close-navbar');

if (menuIcon && navbar && navbarBackdrop) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.add('open');
    });
    navbarBackdrop.addEventListener('click', () => {
        navbar.classList.remove('open');
    });
}
if (closeNavbar && navbar) {
    closeNavbar.addEventListener('click', () => {
        navbar.classList.remove('open');
    });
}

// Dark/Light Mode Toggle
const modeToggle = Array.from(document.querySelectorAll('header .header-right span'))
    .find(el => el.textContent && el.textContent.toLowerCase().includes('dark/light'));

function setMode(dark) {
    if (dark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}
if (modeToggle) {
    modeToggle.style.cursor = 'pointer';
    modeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    // On load, set theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Button Click Feedback
const buttons = document.querySelectorAll('button, .download-btn');
buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.97)';
    });
    btn.addEventListener('mouseup', () => {
        btn.style.transform = '';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

// --- Welcome Alert on First Visit ---
if (!localStorage.getItem('visited')) {
    setTimeout(() => {
        alert('Welcome to FinovateX! Explore your dashboard and manage your finances easily.');
    }, 800);
    localStorage.setItem('visited', 'true');
}

// --- Profile Card Hover Effect ---
document.querySelectorAll('.profile-detail-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.boxShadow = '0 4px 16px rgba(79, 140, 255, 0.18)';
        box.style.transform = 'scale(1.03)';
    });
    box.addEventListener('mouseleave', () => {
        box.style.boxShadow = '0 1px 4px rgba(79, 140, 255, 0.10)';
        box.style.transform = '';
    });
});

// --- Button  Effect ---
document.querySelectorAll('button, .download-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const circle = document.createElement('span');
        circle.className = 'ripple';
        circle.style.left = `${e.offsetX}px`;
        circle.style.top = `${e.offsetY}px`;
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    });
});

// --- Show/Hide Password Toggle ---
document.querySelectorAll('input[type="password"]').forEach(input => {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(input);

    const toggle = document.createElement('span');
    toggle.textContent = '👁️';
    toggle.style.position = 'absolute';
    toggle.style.right = '12px';
    toggle.style.top = '50%';
    toggle.style.transform = 'translateY(-50%)';
    toggle.style.cursor = 'pointer';
    toggle.style.fontSize = '1.2em';
    wrapper.appendChild(toggle);

    toggle.addEventListener('click', () => {
        input.type = input.type === 'password' ? 'text' : 'password';
        toggle.textContent = input.type === 'password' ? '👁️' : '🙈';
    });
});

// --- Smooth Scroll to Top Button ---
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑ Top';
scrollBtn.className = 'scroll-to-top';
document.body.appendChild(scrollBtn);

scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '9999';

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
j
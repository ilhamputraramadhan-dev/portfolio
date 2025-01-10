// Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if(window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');    
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Hamburger 
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik diluar hamburger
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
}
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;  
} else {
    darkToggle.checked = false; 
}

// Gmail form kontak menggunakan emailjs<script>
  (function() {
    emailjs.init("bx3l1kWTCWSpkVsEw"); // Ganti dengan Public Key Anda
  })();

//   Kirim data form kontak
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman
    
    // Ambil data form
    const formData = new FormData(this);

    // Kirim data ke EmailJS
    emailjs.send("service_uqjrb0f", "template_v3mrxbs", {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    })
    .then(function(response) {
      alert('Pesan berhasil dikirim! Terima kasih.');
    }, function(error) {
      alert('Terjadi kesalahan, coba lagi. ' + error.text);
    });
  });




 // Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// ===== RELEASED SONGS SECTION =====
const songsData = [
    {
        youtubeId: "3rbZA3egxaI", // From your link
        title: "NOAHR vE",
        artist: "K.reger & priya arora| devinder keri & monika sandhu",
        channel: "INTEREST music ",
        year: "APRIL 2025"
    },
 //TERA saher song
 {
        youtubeId: "73ZBjdeT4M8", // From your link
        title: "PURANE VAIR (official VIDEO ) ",
        artist: "NOHAR WALA KHAN | CHAINI SUKHCHAIN ft. PREETI WALIA|YASHU SONI,PAYAL   ",
        channel: "INTEREST music ",
        year: "july 2025"
    },
    {
        youtubeId: "", // Example video ID
        title: "' upcoming song",
        artist: "coming soon",
        channel: "coming soon",
        year: "2025"
    }
    // Add more songs as needed
];

const songsGrid = document.querySelector('.songs-grid');

function loadSongs() {
    songsData.forEach(song => {
        const songCard = document.createElement('div');
        songCard.className = 'song-card';
        
        songCard.innerHTML = `
            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/${song.youtubeId}?rel=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="song-info">
                <h3>${song.title}</h3>
                <p>Artist: ${song.artist}</p>
                <p>Channel: ${song.channel} | ${song.year}</p>
            </div>
        `;
        
        songsGrid.appendChild(songCard);
    });
}

// Load songs when page finishes loading
window.addEventListener('DOMContentLoaded', loadSongs);

// ===== CONTACT FORM TO WHATSAPP =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    const whatsappUrl = `https://wa.me/919057641763?text=Name:%20${encodeURIComponent(name)}%0APhone:%20${encodeURIComponent(phone)}%0AMessage:%20${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    this.reset();
    alert("We're redirecting you to WhatsApp to complete your message!");
});

// Nav

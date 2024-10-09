// Hent videoelementet
const video = document.querySelector('.video');

// Hent den næste sektion (h2)
const nextSection = document.getElementById('next-section');

// Lyt efter 'ended' begivenheden
video.addEventListener('ended', () => {
    // Rul ned til den næste sektion
    nextSection.scrollIntoView({ behavior: 'smooth' });
});




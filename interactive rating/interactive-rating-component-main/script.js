const ratings = document.querySelectorAll('.rating');
const submitBtn = document.getElementById('submit-btn');
const feedbackCard = document.getElementById('feedback-card');
const thankYouCard = document.getElementById('thank-you-card');
const selectedRatingText = document.getElementById('selected-rating');
let selectedRating;

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        ratings.forEach(r => r.classList.remove('active'));
        rating.classList.add('active');
        selectedRating = rating.getAttribute('data-value');
    });
});

submitBtn.addEventListener('click', () => {
    if (selectedRating) {
        feedbackCard.style.display = 'none';
        thankYouCard.style.display = 'block';
        selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
    } else {
        alert('Please select a rating before submitting!');
    }
});

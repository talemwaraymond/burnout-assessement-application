// script.js

// DOM Elements
const assessmentForm = document.getElementById('assessment-form');
const resultsSection = document.getElementById('results-section');
const resultsDiv = document.getElementById('results');
const recommendationsDiv = document.getElementById('recommendations');
const privacyPolicySection = document.getElementById('privacy-policy-section');
const dashboardSection = document.getElementById('dashboard-section');

// Event Listeners
assessmentForm.addEventListener('submit', handleSubmit);
document.getElementById('show-privacy-policy').addEventListener('click', showPrivacyPolicy);
document.getElementById('show-dashboard').addEventListener('click', showDashboard);

// Form Submission Handler
function handleSubmit(event) {
    event.preventDefault();
    
    const q1 = parseInt(document.getElementById('q1').value);
    const q2 = parseInt(document.getElementById('q2').value);
    const q3 = parseInt(document.getElementById('q3').value);
    const q4 = parseInt(document.getElementById('q4').value);
    const q5 = parseInt(document.getElementById('q5').value);
    const q6 = parseInt(document.getElementById('q6').value);
    const q7 = parseInt(document.getElementById('q7').value);
    const q8 = parseInt(document.getElementById('q8').value);
    
    
    const score = calculateScore(q1, q2 ,q3, q4, q4, q5, q6, q7, q8);
    displayResults(score);
}

// Score Calculation Function
function calculateScore(q1, q2, q3, q4, q4, q5, q6, q7, q8) {
    // Simple scoring algorithm (to be replaced with a more complex one)
    return q1 + q2 +q3 + q4 + q4 + q5 + q6 + q7 + q8;
}

// Display Results Function
function displayResults(score) {
    resultsDiv.textContent = `Your Burnout Score: ${score}`;
    recommendationsDiv.textContent = getRecommendations(score);

    resultsSection.classList.remove('hidden');
}

// Recommendations Based on Score
function getRecommendations(score) {
    if (score <= 5) {
        return 'Your stress levels are low. Keep maintaining a healthy work-life balance!';
    } else {
        return 'Consider speaking with a therapist or using stress management techniques.';
    }
}
 
// Show Privacy Policy
function showPrivacyPolicy(event) {
    event.preventDefault();
    privacyPolicySection.classList.toggle('hidden');
}

// Show Dashboard
function showDashboard(event) {
    event.preventDefault();
    dashboardSection.classList.toggle('hidden');
    renderChart();
}

// Dashboard Chart Rendering
function renderChart() {
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Burnout Score',
                data: [5, 10, 15, 20],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
/*contact us */
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission, like sending data to a server
    alert('Form submitted successfully!');
});

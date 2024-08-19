// script.js

/* DOM Elements
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
/*contact us 
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission, like sending data to a server
    alert('Form submitted successfully!');
});
/** */
$(document).ready(function() {
    const questions = [
        {
            text: "At work, I feel mentally exhausted",
            emoji: "path-to-exhausted-emoji.png"
        },
        {
            text: "Everything I do at work requires a great deal of effort",
            emoji: "path-to-effort-emoji.png"
        },
        {
            text: "After a day at work, I find it hard to recover my energy",
            emoji: "path-to-recovery-emoji.png"
        },
        {
            text: "At work, I feel physically exhausted",
            emoji: "path-to-physically-exhausted-emoji.png"
        },
        {
            text: "When I get up in the morning, I lack the energy to start a new day at work",
            emoji: "path-to-lack-energy-emoji.png"
        },
        {
            text: "I want to be active at work, but somehow I am unable to manage",
            emoji: "path-to-unable-manage-emoji.png"
        },
        {
            text: "When I exert myself at work, I quickly get tired",
            emoji: "path-to-get-tired-emoji.png"
        },
        {
            text: "At the end of my working day, I feel mentally exhausted and drained",
            emoji: "path-to-drained-emoji.png"
        }
    ];

    let currentQuestionIndex = 0;
    let totalScore = 0;

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            $('#question-number').text(`0${currentQuestionIndex + 1}`);
            $('#question-text').text(questions[currentQuestionIndex].text);
            $('#emoji').attr('src', questions[currentQuestionIndex].emoji);
            if (currentQuestionIndex === questions.length - 1) {
                $('#submit-btn').removeClass('hidden');
            }
        } else {
            showResults();
        }
    }

    $('.option').on('click', function() {
        const score = parseInt($(this).attr('data-score'));
        totalScore += score;

        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');

        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 300);
    });

    $('#submit-btn').on('click', function() {
        showResults();
    });

    function showResults() {
        $('#assessment-form').addClass('hidden');
        $('#results-section').removeClass('hidden');

        let resultsText = '';
        let recommendationsText = '';

        if (totalScore <= 16) {
            resultsText = "Your burnout level is low.";
            recommendationsText = "Keep maintaining your current work-life balance and take regular breaks.";
        } else if (totalScore <= 32) {
            resultsText = "You may be experiencing moderate burnout.";
            recommendationsText = "Consider implementing stress management techniques and seeking support.";
        } else {
            resultsText = "You are likely experiencing high burnout.";
            recommendationsText = "It is important to take immediate action. Consider speaking with a mental health professional and evaluating your workload.";
        }

        $('#results').text(resultsText);
        $('#recommendations').text(recommendationsText);
    }

    // Initialize the first question
    loadQuestion();
});


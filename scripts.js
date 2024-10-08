// JavaScript for form submission and email functionality
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Team Registered Successfully!');
});

document.getElementById('send-email').addEventListener('click', function() {
    alert('Player Rankings will be emailed to you!');
    // Here you can add email functionality using a backend service like Node.js, PHP, etc.
});

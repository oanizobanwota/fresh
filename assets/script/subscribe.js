// Initialize EmailJS
(function() {
    emailjs.init("JQVf0VV33G1gYVPgF"); // Replace with your EmailJS userID
})();

// Handle form submission
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('response-message');

    emailjs.send("service_ict9xbg", "template_0g0ryzr", {
        email: email
    })
    .then(function(response) {
        responseMessage.textContent = "Thank you for subscribing!";
        responseMessage.style.color = "green";
    }, function(error) {
        responseMessage.textContent = "There was an error sending your subscription. Please try again.";
        responseMessage.style.color = "red";
    });
});
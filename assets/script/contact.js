// Initialize EmailJS
(function() {
    emailjs.init("JQVf0VV33G1gYVPgF"); // Replace with your EmailJS userID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const number = document.getElementById('number').value;
    const tel = document.getElementById('tel').value;
    const responseMsg = document.getElementById('response-msg');

    emailjs.send("service_ict9xbg", "template_0g0ryzr", {
        name: name,
        email: email,
        message: message,
        number: number,
        tel: tel
    })
    .then(function(response) {
        responseMsg.textContent = "Thank you for contacting us!";
        responseMsg.style.color = "green";
    }, function(error) {
        responseMsg.textContent = "There was an error sending your message. Please try again.";
        responseMsg.style.color = "red";
    });
});
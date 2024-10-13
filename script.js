const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    /** ETAPE POUR CONNECTER EMAILJS AU FORMULAIRE DE CONTACT
    * 1. https://www.emailjs.com - Sign In our Sign Up
    * 2. "Email Services" => "Add New Service" => "Gmail" for example 
    * 3. "Connect Account" => "Create Service" => Copy the "Service ID"
    * 4. "Email Templates" => "Create New Template" 
    * Subject *
        New message from {{user_name}}
        Content *
            Names: {{user_name}}

            Email: {{user_email}}

            Subject: {{user_subject}}

            Message: {{user_message}}

            Best wishes,
            EmailJS team
    * => "Settings" => copy "Template ID
    * 5. "Integration" => "Copy the Form ID" in html page
    * 6. "API KEYS" => "Account" => "Create Key" => "Copy the Public Key"
    * 7. serviceID - templateID - #form - publicKey
    */
    emailjs.sendForm('', '', '#contact-form', '')
        .then(() => {
            // Affiche le message de réussite d'envoi du message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Supprime le message après cinq secondes
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Efface les champs de saisie après l'envoi du message
            contactForm.reset()
        }, () => {
            // Affiche un message d'erreur d'envoi du message en cas de problème avec le service
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}
contactForm.addEventListener('submit', sendEmail)

// Menu open close
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('move');
    navbar.classList.toggle('open-menu');
}
// Close menu on scroll
window.onscroll = () => {
    menu.classList.remove('move');
    navbar.classList.remove('open-menu');
}

// Scrollreveal Animation
const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
animate.reveal('.navbar')
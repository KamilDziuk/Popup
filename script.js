document.addEventListener("DOMContentLoaded", function () {
    // Get references to relevant elements
    const showPopupButton = document.getElementById('showPopup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');

    // Add a click event listener to the "showPopupButton"
    showPopupButton.addEventListener('click', () => {

        // Get a reference to an element with the id 'button'
        const btn = document.getElementById('button');

        // Add a submit event listener to the form
        document.getElementById('form').addEventListener('submit', function (event) {
            event.preventDefault();

            // Update the button text to indicate sending
            btn.value = 'Sending...';

            // Define service and template IDs for email sending
            const serviceID = 'service_6i83c8h';
            const templateID = 'template_vby05s7';

            // Use emailjs to send the form data
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    // Update the button text when the email is sent successfully
                    btn.value = 'Message Sent';

                }, (err) => {
                    // Handle errors and show an alert with the error message
                    btn.value = 'Send';
                    alert(JSON.stringify(err));
                });
        });

        // Display the popup
        popup.style.display = 'block';
    });

    // Add a click event listener to the "closePopupButton"
    closePopupButton.addEventListener('click', () => {
        // Hide the popup when the close button is clicked
        popup.style.display = 'none';
    });

    // Add a click event listener to the window to close the popup when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

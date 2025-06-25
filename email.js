(function () {
    emailjs.init("hV2WshUpXLNAQqkk6"); // ✅ your public key
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseEl = document.getElementById("formResponse");

    if (!form) {
        console.error("❌ contactForm not found in the DOM.");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // ✅ grab values
        const name = form.querySelector('[name="user_name"]').value;
        const email = form.querySelector('[name="user_email"]').value;
        const message = form.querySelector('[name="message"]').value;

        console.log("Sending:", { name, email, message });

        responseEl.textContent = "Sending...";
        responseEl.style.color = "#b0f3f1";
        responseEl.style.fontSize = "1.4rem"

        // ✅ send email using emailjs.send
        emailjs.send("service_hjej41t", "template_r377yzl", {
            user_name: name,
            user_email: email,
            message: message
        }).then(function () {
            responseEl.textContent = "✅ Message sent successfully!";
            responseEl.style.color = "#00ff9f";
            responseEl.style.fontSize = "1.4rem"

            form.reset();
        }, function (error) {
            console.error("EmailJS Error:", error);
            responseEl.textContent = "❌ Failed to send. Please try again.";
            responseEl.style.color = "#ff8080";
        });
    });
});


const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const button = document.getElementById("submitBtn");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    button.textContent = "Sending...";
    button.disabled = true;

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.innerHTML = "✅ Message sent successfully!";
            status.style.color = "green";
            form.reset();
        } else {
            status.innerHTML = "❌ Something went wrong. Try again.";
            status.style.color = "red";
        }

    } catch (error) {
        status.innerHTML = "⚠️ Network error. Please try again.";
        status.style.color = "orange";
    }

    button.textContent = "Submit";
    button.disabled = false;
});
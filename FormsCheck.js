document.addEventListener("DOMContentLoaded", function() {
    let monBouton = document.getElementById('submitForms');
    let errorList = document.querySelector(".message-error ul");

    monBouton.addEventListener('click', function(event) {

        let nom = document.querySelector('#nom');
        let prenom = document.querySelector('#prenom');
        let email = document.querySelector('#email');
        let axe = document.querySelector('#axe');
        let avis = document.querySelector('#avis');

        let errorContainer = document.querySelector(".message-error");

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorList.innerHTML = "";

        if (nom.value === "") {
            appendError(nom, "Le champ 'Nom' est requis.");
            errorContainer.classList.add("message-error");
        } else {
            errorContainer.classList.remove("message-error");
            appendSuccess(nom, "Nom valide");
        }
        if (prenom.value === "") {
            appendError(prenom, "Le champ 'Prenom' est requis.");
            errorContainer.classList.add("message-error");
        } else {
            errorContainer.classList.remove("message-error");
            appendSuccess(prenom, "Prenom valide");
        }
        if (email.value === "" || !emailRegex.test(email.value)) {
            appendError(email, "L'email n'est pas conforme ou est requis.");
            errorContainer.classList.add("message-error");
        } else {
            errorContainer.classList.remove("message-error");
            appendSuccess(email, "Email valide");
        }
        if (axe.value === "") {
            appendError(axe, "Le champ 'Axe préféré' est requis.");
            errorContainer.classList.add("message-error");
        } else {
            errorContainer.classList.remove("message-error");
                appendSuccess(axe, "Nom valide");
        }
        if (avis.value === "") {
            appendError(avis, "Le champ 'Avis' est requis.");
            errorContainer.classList.add("message-error");
        } else {
            errorContainer.classList.remove("message-error");
            appendSuccess(avis, "Avis valide");
        }

        if (!errorContainer.classList.contains("message-error"))
        {
            document.getElementById('inscriptionForm').reset();
            alert("Le formulaire à été envoyé merci !");
            location.reload();

        }

        event.preventDefault();

    });
    function appendError(element, message) {
        console.log("Appending error:", element, message);
        let err = document.createElement("li");
        err.innerText = message;
        errorList.appendChild(err);
        element.classList.add("invalid");
        element.classList.remove("success");
    }
    function appendSuccess(element, message) {
        element.classList.add("success");
        element.classList.remove("invalid");
    }


});


"use strict";

document.addEventListener("DOMContentLoaded", function () {

    // 1. Récupérer le bouton et le menu
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    // 2. Ouvrir et fermer le menu mobile
    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("active");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Fermer le menu" : "Ouvrir le menu"
            );

            menuButton.textContent = isOpen ? "✕" : "☰";
        });

        // Fermer le menu après avoir choisi une rubrique
        const navigationLinks = navigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {
            link.addEventListener("click", function () {

                navigation.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Ouvrir le menu"
                );

                menuButton.textContent = "☰";
            });
        });
    }

    // 3. Afficher automatiquement l'année actuelle
    const yearElement = document.querySelector("#year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 4. Ajouter un effet aux cartes
    const cards = document.querySelectorAll(
        ".skill-card, .project-card, .info-card, .goal-card"
    );

    cards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.style.transform = "translateY(-6px)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "";
        });
    });

    // 5. Vérifier que le fichier JavaScript est chargé
    console.log("Portfolio chargé correctement !");
});

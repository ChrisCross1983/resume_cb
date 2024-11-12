document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");

    // Zeigt den Banner an, wenn das Cookie noch nicht gesetzt ist
    if (!document.cookie.includes("cookiesAccepted=")) {
        cookieBanner.style.display = "block";
    }

    acceptButton.addEventListener("click", function () {
        document.cookie = "cookiesAccepted=true; path=/; max-age=" + 60 * 60 * 24 * 30;
        cookieBanner.style.display = "none";
    });

    declineButton.addEventListener("click", function () {
        document.cookie = "cookiesAccepted=false; path=/; max-age=" + 60 * 60 * 24 * 30;
        cookieBanner.style.display = "none";
    });
});

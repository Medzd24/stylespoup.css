const popupElement = document.getElementById("popup");
    const countdownElement = document.getElementById("countdown");
    const closeButton = document.getElementById("close-button");
    setTimeout(function() {
        popupElement.style.display = "block";

        let countdown = 5;
        countdownElement.textContent = countdown;

        const countdownInterval = setInterval(function () {
            countdown--;
            countdownElement.textContent = countdown;
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                countdownElement.style.display = "none"; 

                closeButton.style.display = "block";

            }
        }, 1000);
    }, 5000);


    closeButton.addEventListener("click", function () {
        popupElement.style.display = "none";
        clearInterval(countdownInterval); 
    });

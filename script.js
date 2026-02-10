document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const initialScreen = document.getElementById('initialScreen');
    const mainCard = document.getElementById('mainCard');
    const typedMessage = document.getElementById('typedMessage');
    const timerDisplay = document.getElementById('timer');

    const messageText = "Eres el latido de mi corazón y la razón de mis sonrisas. Gracias por estos momentos maravillosos a tu lado. ¡Te amo muchísimo!";

    if (startButton) {
        startButton.addEventListener('click', () => {
            initialScreen.classList.add('hidden');
            mainCard.classList.remove('hidden');
            setTimeout(() => {
                mainCard.classList.add('show-card');
                startTyping();
            }, 100);
        });
    }

    function startTyping() {
        let i = 0;
        typedMessage.innerHTML = "";
        function type() {
            if (i < messageText.length) {
                typedMessage.innerHTML += messageText.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        type();
    }

    // FECHA CORRECTA: 12 de Septiembre de 2025
    // Nota: El mes es 8 porque en JS se cuenta: 0=Ene, 1=Feb... 8=Sep.
    const startDate = new Date(2025, 8, 12); 

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        if (timerDisplay) {
            // Arreglado usando concatenación simple para evitar errores de teclado con los backticks
            timerDisplay.innerHTML = days + " días " + hours + "h " + minutes + "m " + seconds + "s";
        }
    }

    setInterval(updateTimer, 1000);
    updateTimer();
});
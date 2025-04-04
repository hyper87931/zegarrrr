let countdownInterval;

document.getElementById('startButton').addEventListener('click', function() {
    const startInput = document.getElementById('start').value;
    const minutyInput = parseInt(document.getElementById('minuty').value);

    if (startInput && !isNaN(minutyInput)) {
        const startTime = moment(startInput, 'HH:mm');
        const koniecTime = startTime.add(minutyInput, 'minutes');

        document.getElementById('koniec').value = koniecTime.format('HH:mm');

        clearInterval(countdownInterval);
        countdownInterval = setInterval(function() {
            const remainingTime = koniecTime.diff(moment());

            if (remainingTime > 0) {
                const duration = moment.duration(remainingTime);
                const hours = duration.hours();
                const minutes = duration.minutes();
                document.getElementById('pozostalo').value = `${hours} godz. ${minutes} min.`;
            } else {
                clearInterval(countdownInterval);
                document.getElementById('pozostalo').value = "Czas minął!";
            }
        }, 1000);
    }
});

// JavaScript Code for Handling Both the Summer Vacation and Lock Screen Countdowns

document.addEventListener('DOMContentLoaded', function() {
    // Existing Summer Vacation Countdown logic
    let eventDate = new Date('December 16, 2023 00:00:00').getTime(); // Adjust to your event's date

    let countdownFunction = function() {
        let now = new Date().getTime();
        let distance = eventDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = "Summer Vacation is here!";
        }
    };

    let countdown = setInterval(countdownFunction, 1000);
    countdownFunction(); // Run once immediately



    var lockCountdown;
    var lockScreenActive = false;

    // Function to toggle the lock screen timer
    window.toggleLockScreen = function() {
        if (lockScreenActive) {
            // If the lock screen is active, stop the timer and reset
            clearInterval(lockCountdown);
            document.getElementById("lockCountdownDisplay").innerHTML = "";
            document.getElementById("lockScreenCountdown").style.display = "none";
            lockScreenActive = false;
            document.getElementById("lockScreenButton").textContent = "Set Lock Screen Timer";
        } else {
            // If the lock screen is not active, start the timer
            var lockTime = prompt("Enter the lock screen time in minutes:");
            if (lockTime) {
                var lockTimeMs = parseInt(lockTime) * 60 * 1000;
                var lockEndTime = new Date(new Date().getTime() + lockTimeMs);
                lockCountdown = setInterval(function() {
                    var now = new Date().getTime();
                    var distance = lockEndTime - now;
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    document.getElementById("lockCountdownDisplay").innerHTML = minutes + "m " + seconds + "s ";
                    if (distance < 0) {
                        clearInterval(lockCountdown);
                        document.getElementById("lockCountdownDisplay").innerHTML = "EXPIRED";
                        lockScreenActive = false;
                        document.getElementById("lockScreenButton").textContent = "Set Lock Screen Timer";
                    }
                }, 1000);
                lockScreenActive = true;
                document.getElementById("lockScreenCountdown").style.display = "block";
                document.getElementById("lockScreenButton").textContent = "Stop";
            }
        }
    };
});
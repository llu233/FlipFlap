function updateFlap(id, value) {
    const flap = document.getElementById(id);
    const currentValue = flap.getAttribute('data-current');
    
    if (currentValue !== value) {
        const flapTop = flap.querySelector('.flap-top');
        const flapNextTop = flap.querySelector('.flap-next-top');

        flapNextTop.textContent = value;

        flap.classList.add('flip');

        setTimeout(() => {
            flapTop.textContent = value;
            flap.classList.remove('flip');
            flap.setAttribute('data-current', value);
        }, 500); // Flip duration
    }
}

function startCounter() {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function incrementCounter() {
        seconds++;
        if (seconds > 59) {
            seconds = 0;
            minutes++;
            if (minutes > 59) {
                minutes = 0;
                hours++;
                if (hours > 99) {  // Assuming a two-digit counter for hours
                    hours = 0;
                }
                updateFlap('hours', String(hours).padStart(2, '0'));
            }
            updateFlap('minutes', String(minutes).padStart(2, '0'));
        }
        updateFlap('seconds', String(seconds).padStart(2, '0'));
    }

    setInterval(incrementCounter, 1000); // Increment the counter every second
}

document.getElementById('hours').setAttribute('data-current', '00');
document.getElementById('minutes').setAttribute('data-current', '00');
document.getElementById('seconds').setAttribute('data-current', '00');

// Start the counter
startCounter();

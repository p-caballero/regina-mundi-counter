document.bomb = {
    minutes: 0,
    seconds: 0,
    timeoutId: 0,
    updateText: function () {
        document.getElementById('counter').innerHTML = this.minutes.toString().padStart(2, '0') + ':' + this.seconds.toString().padStart(2, '0');
    },
    playSound: function (path) {
        let audio = new Audio('assets/sounds/' + path);
        audio.play();
    },
    setMinutes: function (value) {
        this.playSound('microwave-button-82493.mp3');
        this.minutes = value;
        this.updateText();
    },
    decreaseSeconds: function () {
        this.playSound('microwave-button-82493.mp3');
        if (this.seconds > 0) {
            this.seconds--;
        } else {
            this.seconds = 59;
        }
        this.updateText();
    },
    increaseSeconds: function () {
        this.playSound('microwave-button-82493.mp3');
        if (document.bomb.seconds < 59) {
            document.bomb.seconds++;
        } else {
            document.bomb.seconds = 0;
        }
        this.updateText();
    },
    reset: function () {
        this.playSound('microwave-button-82493.mp3');
        this.minutes = 0;
        this.seconds = 0;
        this.updateText();
    },
    start: function () {
        this.playSound('microwave-button-82493.mp3');
        this.timeoutId = setTimeout(() => this.evaluate(), 1000);
    },
    stop: function () {
        this.playSound('microwave-button-82493.mp3');
        clearTimeout(this.timeoutId)
    },
    evaluate: function () {
        if (this.minutes == 0 && this.seconds == 0) {
            this.timeoutId = 0;
            this.explode();
            return;
        } else if (this.seconds == 0) {
            this.minutes--;
            this.seconds = 59;
        } else {
            this.seconds--;
        }

        this.playSound('beep-sound-8333.mp3');

        this.updateText();
        this.timeoutId = setTimeout(() => this.evaluate(), 1000);
    },
    explode: function () {
        document.getElementById('youtubeFrame').style.visibility = 'visible';
        this.playSound('hq-explosion-6288.mp3');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('min1').addEventListener('click', (event) => {
        document.bomb.setMinutes(1);
        event.stopPropagation();
    });

    document.getElementById('min2').addEventListener('click', (event) => {
        document.bomb.setMinutes(2);
        event.stopPropagation();
    });

    document.getElementById('min3').addEventListener('click', (event) => {
        document.bomb.setMinutes(3);
        event.stopPropagation();
    });

    document.getElementById('down').addEventListener('click', (event) => {
        document.bomb.decreaseSeconds();
        event.stopPropagation();
    });

    document.getElementById('up').addEventListener('click', (event) => {
        document.bomb.increaseSeconds();
        event.stopPropagation();
    });

    document.getElementById('reset').addEventListener('click', (event) => {
        document.bomb.reset();
        event.stopPropagation();
    });

    document.getElementById('start').addEventListener('click', (event) => {
        document.bomb.start();
        event.stopPropagation();
    });

    document.getElementById('stop').addEventListener('click', (event) => {
        document.bomb.stop();
        event.stopPropagation();
    });
});
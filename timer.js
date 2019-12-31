class Timer {
    constructor(startButton, pauseButton, totalDuration, progressCircle, progressCircleLbl, callbacks) {
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.totalDuration = totalDuration;
        this.timeRemaining = this.totalDuration;
        this.progressCircle = progressCircle;
        this.progressCircleLbl = progressCircleLbl;

        this.perimeter = progressCircle.getAttribute('r') * 2 * Math.PI;

        this.progressCircle.setAttribute('stroke-dasharray', this.perimeter);
        this.progressCircle.setAttribute('stroke-dashoffset', -this.perimeter);
        
        // Event listeners
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);

        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete
        }

        this.start();
    }

    start = () => {
        if(this.onStart) {
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 2);
    }
    
    tick = () => {
        const completedVal = Math.abs(this.perimeter * this.timeRemaining / this.totalDuration - this.perimeter);
         
        if (this.timeRemaining <= 0) {
            this.pause();
            if(this.onComplete) {
                this.onComplete();
            }
        } else {
            if(this.onTick) {
                this.onTick();
            }

            this.completedPecentage = `${(completedVal / this.perimeter * 100).toFixed(0)}%`;
        }
        this.progressCircle.setAttribute('stroke-dashoffset', -this.perimeter - completedVal);
    }

    pause = () => { 
        clearInterval(this.interval);
    }

    get completedPecentage() {
        return this.progressCircleLbl.innerHTML;
    }

    set completedPecentage(pct) {
        this.progressCircleLbl.innerHTML = pct;
    }
}




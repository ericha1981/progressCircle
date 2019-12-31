const progressCircle01 = document.querySelector("#progressCircle01");
const progressCircle02 = document.querySelector("#progressCircle02");
const progressCircle03 = document.querySelector("#progressCircle03");
const progressCircle04 = document.querySelector("#progressCircle04");
const progressCircle05 = document.querySelector("#progressCircle05");
const progressCircle06 = document.querySelector("#progressCircle06");

const progressCircleLbl01 = document.querySelector("#timer-text-1");
const progressCircleLbl02 = document.querySelector("#timer-text-2");
const progressCircleLbl03 = document.querySelector("#timer-text-3");
const progressCircleLbl04 = document.querySelector("#timer-text-4");
const progressCircleLbl05 = document.querySelector("#timer-text-5");
const progressCircleLbl06 = document.querySelector("#timer-text-6");

const startButton1 = document.querySelector("#btnStart-1");
const startButton2 = document.querySelector("#btnStart-2");
const startButton3 = document.querySelector("#btnStart-3");
const startButton4 = document.querySelector("#btnStart-4");
const startButton5 = document.querySelector("#btnStart-5");
const startButton6 = document.querySelector("#btnStart-6");

const pauseButton1 = document.querySelector("#btnPause-1");
const pauseButton2 = document.querySelector("#btnPause-2");
const pauseButton3 = document.querySelector("#btnPause-3");
const pauseButton4 = document.querySelector("#btnPause-4");
const pauseButton5 = document.querySelector("#btnPause-5");
const pauseButton6 = document.querySelector("#btnPause-6");

// variables
const interval = 0;
const timeRemaining = 0;

// Create a class instance.
const timer = new Timer(startButton1, pauseButton1, 1000, progressCircle01, progressCircleLbl01, {
    onStart() {
        console.log("Timer started...");
    },
    onTick() {
        this.timeRemaining -= 1;
    },
    onComplete() {
        console.log("Timer completed...");
        this.timeRemaining = this.totalDuration;
    }
});

const timer2 = new Timer(startButton2, pauseButton2, 2000, progressCircle02, progressCircleLbl02, {
    onStart() {
        console.log("Timer started...");
    },
    onTick() {
        this.timeRemaining -= 1;
    },
    onComplete() {
        console.log("Timer completed...");
        this.timeRemaining = this.totalDuration;
    }
});

const timer3 = new Timer(startButton3, pauseButton3, 1500, progressCircle03, progressCircleLbl03, {
    onStart() {
        console.log("Timer started...");
    },
    onTick() {
        this.timeRemaining -= 1;
    },
    onComplete() {
        console.log("Timer completed...");
        this.timeRemaining = this.totalDuration;
    }
});

const timer4 = new Timer(startButton4, pauseButton4, 600, progressCircle04, progressCircleLbl04, {
    onStart() {
        console.log("Timer started...");
    },
    onTick() {
        this.timeRemaining -= 1;
    },
    onComplete() {
        console.log("Timer completed...");
        this.timeRemaining = this.totalDuration;
    }
});

const timer5 = new Timer(startButton5, pauseButton5, 800, progressCircle05, progressCircleLbl05, {
    onStart() {
        console.log("Timer started...");
    },
    onTick() {
        this.timeRemaining -= 1;
    },
    onComplete() {
        console.log("Timer completed...");
        this.timeRemaining = this.totalDuration;
    }
});

const timer6 = new Timer(startButton6, pauseButton6, 1750, progressCircle06, progressCircleLbl06, {
    onStart() {
        console.log("Timer started...");
    },
    onTick() {
        this.timeRemaining -= 1;
    },
    onComplete() {
        console.log("Timer completed...");
        this.timeRemaining = this.totalDuration;
    }
});



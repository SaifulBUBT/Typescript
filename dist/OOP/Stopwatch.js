"use strict";
// Exercise
// Build a Stopwatch class with:
// A private startTime: number | null (millis since epoch) — initially null
// A private elapsed: number = 0 (accumulated millis from previous runs)
// start() — records the current time as startTime. No-op if already running.
// stop() — adds the time since startTime to elapsed, sets startTime back to null.
// reset() — sets both back to zero/null.
// read(): number — returns total elapsed millis (including the in-progress run, if any).
Object.defineProperty(exports, "__esModule", { value: true });
class Stopwatch {
    startTime = null;
    elapsed = 0;
    start() {
        // If stopwatch is already running, do nothing
        if (this.startTime !== null) {
            return;
        }
        this.startTime = Date.now();
    }
    stop() {
        // If stopwatch is not running, do nothing
        if (this.startTime === null) {
            return;
        }
        this.elapsed += Date.now() - this.startTime;
        this.startTime = null;
    }
    reset() {
        this.startTime = null;
        this.elapsed = 0;
    }
    read() {
        // If stopwatch is not running
        if (this.startTime === null) {
            return this.elapsed;
        }
        // If stopwatch is currently running
        return this.elapsed + (Date.now() - this.startTime);
    }
}

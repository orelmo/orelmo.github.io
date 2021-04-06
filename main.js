(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\or-el\OneDrive\שולחן העבודה\Orel\LoopMachine\LoopMachine\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function AppComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const index_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.padClicked(index_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "pad", index_r2, "");
} }
class AppComponent {
    constructor() {
        this.title = 'LoopMachine';
        this.isPlayOn = false;
        this.isRecordOn = false;
        this.isRecordOccurred = false;
        this.pads = [
            { check: false, source: new Audio("..\\assets\\samples\\120_future_funk_beats_25.mp3"), startTime: 0, duration: 0, isPlaying: false },
            { check: false, source: new Audio("..\\assets\\samples\\120_stutter_breakbeats_16.mp3"), startTime: 0, duration: 0, isPlaying: false },
            { check: false, source: new Audio("..\\assets\\samples\\Bass Warwick heavy funk groove on E 120 BPM.mp3"), startTime: 0, duration: 0, isPlaying: false },
            { check: false, source: new Audio("..\\assets\\samples\\electric guitar coutry slide 120bpm - B.mp3"), startTime: 0, duration: 0, isPlaying: false },
            { check: false, source: new Audio("..\\assets\\samples\\FUD_120_StompySlosh.mp3"), startTime: 0, duration: 0, isPlaying: false },
            { check: false, source: new Audio("..\\assets\\samples\\GrooveB_120bpm_Tanggu.mp3"), startTime: 0, duration: 0, isPlaying: false },
            { check: false, source: new Audio("..\\assets\\samples\\MazePolitics_120_Perc.mp3"), startTime: 0, duration: 0, isPlaying: false },
            { check: false, source: new Audio("..\\assets\\samples\\PAS3GROOVE1.03B.mp3"), startTime: 0, duration: 0, isPlaying: false },
            { check: false, source: new Audio("..\\assets\\samples\\SilentStar_120_Em_OrganSynth.mp3"), startTime: 0, duration: 0, isPlaying: false }
        ];
        this.turnedOnPadsIndexes = [];
        this.record = [];
        this.recordStartTime = 0;
    }
    ngOnInit() {
        let savedRecord = sessionStorage.getItem("record");
        if (savedRecord != null && savedRecord != "undefined") {
            this.showComponentById("playRecordButton");
            this.record = JSON.parse(savedRecord);
        }
    }
    playSamples() {
        for (let i = 0; i < this.turnedOnPadsIndexes.length; i++) {
            this.pads[this.turnedOnPadsIndexes[i]].source.load();
            this.pads[this.turnedOnPadsIndexes[i]].source.play();
            this.pads[this.turnedOnPadsIndexes[i]].isPlaying = true;
            if (this.isRecordOn) {
                this.pads[this.turnedOnPadsIndexes[i]].startTime = Date.now();
            }
        }
        this.loopTimeout = setTimeout(() => {
            if (this.turnedOnPadsIndexes.length > 0) {
                this.addSamplesToRecord();
                this.playSamples();
            }
        }, 8000);
    }
    addSamplesToRecord() {
        for (let i = 0; i < this.turnedOnPadsIndexes.length; i++) {
            if (this.pads[this.turnedOnPadsIndexes[i]].isPlaying) {
                this.record.push({ startTime: this.pads[this.turnedOnPadsIndexes[i]].startTime - this.recordStartTime,
                    duration: 8000, sourceIndex: this.turnedOnPadsIndexes[i],
                    sample: this.pads[this.turnedOnPadsIndexes[i]].source });
            }
        }
    }
    padClicked(padIndex) {
        let pad = this.pads[padIndex];
        pad.check = !pad.check; // switch pad status
        this.changePadPress(padIndex);
        if (pad.check) { //pad is on
            this.turnedOnPadsIndexes.push(padIndex);
            if (this.isPlayOn && this.turnedOnPadsIndexes.length == 1) { //there is no playing samples
                clearTimeout(this.loopTimeout);
                this.playSamples();
            }
        }
        else { //pad is off
            this.stopPlaySample(padIndex);
        }
    }
    changePadPress(padIndex) {
        var _a, _b;
        if (this.pads[padIndex].check) {
            (_a = document.getElementById("pad" + padIndex)) === null || _a === void 0 ? void 0 : _a.classList.replace("unpressedPad", "pressedPad");
        }
        else {
            (_b = document.getElementById("pad" + padIndex)) === null || _b === void 0 ? void 0 : _b.classList.replace("pressedPad", "unpressedPad");
        }
    }
    stopPlaySample(padIndex) {
        for (let i = 0; i < this.turnedOnPadsIndexes.length; i++) {
            if (this.turnedOnPadsIndexes[i] == padIndex) { //search the value that equal to the pad index
                let selectedPad = this.pads[this.turnedOnPadsIndexes[i]];
                if (this.pads[this.turnedOnPadsIndexes[i]].isPlaying) {
                    selectedPad.source.pause(); //stop the sample
                    selectedPad.check = false; // uncheck the pad
                    selectedPad.isPlaying = false;
                    this.record.push({ startTime: selectedPad.startTime - this.recordStartTime,
                        duration: Date.now() - selectedPad.startTime, sourceIndex: padIndex,
                        sample: this.pads[this.turnedOnPadsIndexes[i]].source }); //add section to record array
                }
                this.turnedOnPadsIndexes.splice(i, 1);
                break;
            }
        }
    }
    buttonPlayClicked() {
        if (!this.isPlayOn) {
            this.changeClassesByButtomPlay();
            this.changeButtonsDisabilityById(true, "recordButton", "playRecordButton");
            this.recordStartTime = Date.now();
            this.isPlayOn = true;
        }
        clearTimeout(this.loopTimeout); //clear the loop from last session (if had one)
        this.playSamples();
        if (this.isRecordOn) {
            this.changeButtonsDisabilityById(true, "playButton");
        }
    }
    changeClassesByButtomPlay() {
        var _a, _b;
        (_a = document.getElementById("playButton")) === null || _a === void 0 ? void 0 : _a.classList.replace("playButton", "playButtonPlaying");
        (_b = document.getElementById("stopButton")) === null || _b === void 0 ? void 0 : _b.classList.replace("stopButtonStopping", "stopButton");
    }
    buttonStopClicked() {
        this.changeButtonsDisabilityById(false, "recordButton", "playRecordButton", "playButton");
        this.changeClassesByButtonStop();
        while (this.turnedOnPadsIndexes.length > 0) { //turning off all active samples
            this.stopPlaySample(this.turnedOnPadsIndexes[0]);
        }
        clearTimeout(this.loopTimeout);
        this.isPlayOn = false;
        if (this.isRecordOn) {
            this.isRecordOn = !this.isRecordOn;
            this.stopRecord();
            this.saveRecord();
        }
    }
    changeButtonsDisabilityById(disabled, ...buttonsIds) {
        for (let i = 0; i < buttonsIds.length; i++) {
            document.getElementById(buttonsIds[i]).disabled = disabled;
            if (disabled) {
                document.getElementById(buttonsIds[i]).style.opacity = "50%";
            }
            else {
                document.getElementById(buttonsIds[i]).style.opacity = "100%";
            }
        }
    }
    changeClassesByButtonStop() {
        var _a, _b, _c;
        (_a = document.getElementById("playButton")) === null || _a === void 0 ? void 0 : _a.classList.replace("playButtonPlaying", "playButton");
        (_b = document.getElementById("stopButton")) === null || _b === void 0 ? void 0 : _b.classList.replace("stopButton", "stopButtonStopping");
        this.turnedOnPadsIndexes.forEach(padIndex => {
            var _a;
            (_a = document.getElementById("pad" + padIndex)) === null || _a === void 0 ? void 0 : _a.classList.replace("pressedPad", "unpressedPad");
        });
        if (this.isRecordOn) {
            (_c = document.getElementById("recordButton")) === null || _c === void 0 ? void 0 : _c.classList.replace("recordButtonRecording", "recordButton");
        }
    }
    buttonRecordClicked() {
        this.isRecordOn = !this.isRecordOn; //switch record status
        this.changeClassesByButtomRecording();
        if (this.isRecordOn) {
            this.hideComponentById("playRecordButton");
            this.startRecord();
        }
    }
    hideComponentById(componentId) {
        var _a;
        (_a = document.getElementById(componentId)) === null || _a === void 0 ? void 0 : _a.classList.add("displayed");
    }
    changeClassesByButtomRecording() {
        var _a, _b;
        if (this.isRecordOn) {
            (_a = document.getElementById("recordButton")) === null || _a === void 0 ? void 0 : _a.classList.replace("recordButton", "recordButtonRecording");
        }
        else {
            (_b = document.getElementById("recordButton")) === null || _b === void 0 ? void 0 : _b.classList.replace("recordButtonRecording", "recordButton");
        }
    }
    startRecord() {
        this.record = [];
    }
    stopRecord() {
        if (this.record.length > 0) {
            this.isRecordOccurred = true;
            this.showComponentById("playRecordButton");
        }
    }
    saveRecord() {
        let recordJson = JSON.stringify(this.record);
        sessionStorage.setItem("record", recordJson);
    }
    showComponentById(...componentsIds) {
        var _a;
        for (let i = 0; i < componentsIds.length; i++) {
            (_a = document.getElementById(componentsIds[i])) === null || _a === void 0 ? void 0 : _a.classList.remove("displayed");
        }
    }
    buttonPlayRecordClicked() {
        if (!this.isRecordOccurred) {
            this.fillSavedRecordAudio();
        }
        this.changeClassesByButtomPlayRecord(true);
        this.changeAllElementsDisabilityOnRecordPlaying(true);
        this.playRecord();
    }
    fillSavedRecordAudio() {
        for (let i = 0; i < this.record.length; i++) {
            this.record[i].sample = this.pads[this.record[i].sourceIndex].source;
        }
    }
    changeClassesByButtomPlayRecord(isRecordPlayingOn) {
        var _a, _b, _c;
        if (isRecordPlayingOn) {
            (_a = document.getElementById("playRecordButton")) === null || _a === void 0 ? void 0 : _a.classList.replace("playRecordButton", "playRecordButtonPlaying");
            (_b = document.getElementById("stopButton")) === null || _b === void 0 ? void 0 : _b.classList.replace("stopButtonStopping", "stopButton");
        }
        else {
            (_c = document.getElementById("playRecordButton")) === null || _c === void 0 ? void 0 : _c.classList.replace("playRecordButtonPlaying", "playRecordButton");
        }
    }
    changeAllElementsDisabilityOnRecordPlaying(disabilityState) {
        let pads = document.getElementsByClassName("pad");
        for (let i = 0; i < pads.length; i++) {
            pads.item(i).disabled = disabilityState;
        }
        document.getElementById("playButton").disabled = disabilityState;
        document.getElementById("recordButton").disabled = disabilityState;
        document.getElementById("stopButton").disabled = disabilityState;
        document.getElementById("playRecordButton").disabled = disabilityState;
        if (disabilityState) {
            document.getElementById("playButton").style.opacity = "50%";
            document.getElementById("recordButton").style.opacity = "50%";
            document.getElementById("stopButton").style.opacity = "50%";
        }
        else {
            document.getElementById("playButton").style.opacity = "100%";
            document.getElementById("recordButton").style.opacity = "100%";
            document.getElementById("stopButton").style.opacity = "100%";
        }
    }
    playRecord() {
        let isLastSample = false;
        for (let i = 0; i < this.record.length; i++) {
            if (i == this.record.length - 1) {
                isLastSample = true;
            }
            this.playSampleAfterMS(this.record[i].sample, this.record[i].startTime, this.record[i].sourceIndex);
            if (this.record[i].duration != 8000) { //the sample need to be pause after 'start time'+'duration' ms
                this.stopSampleAfterMS(this.record[i].sample, this.record[i].startTime + this.record[i].duration, isLastSample, this.record[i].sourceIndex);
            }
        }
    }
    stopSampleAfterMS(sample, stopTimer, isLast, padIndex) {
        setTimeout(() => {
            sample.pause();
            this.pads[padIndex].check = false;
            this.changePadPress(padIndex);
            if (isLast) {
                this.changeClassesByButtomPlayRecord(false);
                this.changeAllElementsDisabilityOnRecordPlaying(false);
                this.unpressPads();
            }
        }, stopTimer);
    }
    unpressPads() {
        var _a;
        for (let i = 0; i < this.pads.length; i++) {
            (_a = document.getElementsByClassName("pad").item(i)) === null || _a === void 0 ? void 0 : _a.classList.replace("pressedPad", "unpressedPad");
        }
    }
    playSampleAfterMS(sample, delayTime, padIndex) {
        setTimeout(() => {
            sample.load();
            sample.play();
            this.pads[padIndex].check = true;
            this.changePadPress(padIndex);
        }, delayTime);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 1, consts: [["id", "header"], ["id", "padsContainer", 1, "container"], ["class", "pad unpressedPad", 3, "id", "click", 4, "ngFor", "ngForOf"], ["id", "playStopContainer", 1, "container"], ["id", "playButton", 1, "operatingButton", "playButton", 3, "click"], ["id", "stopButton", 1, "operatingButton", "stopButton", 3, "click"], ["id", "recordContainer", 1, "container"], ["id", "recordButton", 1, "operatingButton", "recordButton", 3, "click"], ["id", "playRecordButton", 1, "operatingButton", "playRecordButton", "displayed", 3, "click"], [1, "pad", "unpressedPad", 3, "id", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loop Machine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_button_3_Template, 1, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.buttonPlayClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.buttonStopClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { return ctx.buttonRecordClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() { return ctx.buttonPlayRecordClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pads);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["#header[_ngcontent-%COMP%]\r\n{\r\n    text-align:center;\r\n    color: #99f741; ;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n#padsContainer[_ngcontent-%COMP%]\r\n{\r\n    width: 350px;\r\n}\r\n\r\n#recordButton[_ngcontent-%COMP%]\r\n{\r\n    margin-right: 50px;\r\n}\r\n\r\n#playRecordButton[_ngcontent-%COMP%]\r\n{\r\n    margin-left: 50px;\r\n}\r\n\r\n.recordButton[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('record-button.png');\r\n}\r\n\r\n.recordButtonRecording[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('record-button-recording.png');\r\n}\r\n\r\n.playRecordButton[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('play-record.png');\r\n}\r\n\r\n.playRecordButtonPlaying[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('play-record-playing.png');\r\n}\r\n\r\n.playButton[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('play-button.png');\r\n}\r\n\r\n.playButtonPlaying[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('play-button-playing.png');\r\n}\r\n\r\n.stopButton[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('stop-button.png');\r\n}\r\n\r\n.stopButtonStopping[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('stop-button-stopping.png');\r\n}\r\n\r\n.displayed[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.operatingButton[_ngcontent-%COMP%]\r\n{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-color: transparent;\r\n    background-color: transparent;\r\n    background-position: center;\r\n    margin: 20px;\r\n}\r\n\r\n.pad[_ngcontent-%COMP%]\r\n{\r\n    background-position: center;\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 7px;\r\n}\r\n\r\n.pad.unpressedPad[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(211, 87, 201);\r\n}\r\n\r\n.pad.pressedPad[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(36, 202, 202);\r\n}\r\n\r\n#pad0[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('scratch.png');\r\n}\r\n\r\n#pad1[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('subwoofer.png');\r\n}\r\n\r\n#pad2[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('bass-guitar.png');\r\n}\r\n\r\n#pad3[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('guitar.png');\r\n}\r\n\r\n#pad4[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('drums.png');\r\n}\r\n\r\n#pad5[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('darbuka.png');\r\n}\r\n\r\n#pad6[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('mixer.png');\r\n}\r\n\r\n#pad7[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('little-drum.png');\r\n}\r\n\r\n#pad8[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('piano.png');\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLDBDQUEyRDtBQUMvRDs7QUFFQTs7SUFFSSxvREFBcUU7QUFDekU7O0FBRUE7O0lBRUksd0NBQXlEO0FBQzdEOztBQUVBOztJQUVJLGdEQUFpRTtBQUNyRTs7QUFFQTs7SUFFSSx3Q0FBeUQ7QUFDN0Q7O0FBRUE7O0lBRUksZ0RBQWlFO0FBQ3JFOztBQUVBOztJQUVJLHdDQUF5RDtBQUM3RDs7QUFFQTs7SUFFSSxpREFBa0U7QUFDdEU7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLG1DQUFtQztBQUN2Qzs7QUFFQTs7SUFFSSxtQ0FBbUM7QUFDdkM7O0FBRUE7O0lBRUksb0NBQXFEO0FBQ3pEOztBQUVBOztJQUVJLHNDQUF1RDtBQUMzRDs7QUFFQTs7SUFFSSx3Q0FBeUQ7QUFDN0Q7O0FBRUE7O0lBRUksbUNBQW9EO0FBQ3hEOztBQUVBOztJQUVJLGtDQUFtRDtBQUN2RDs7QUFFQTs7SUFFSSxvQ0FBcUQ7QUFDekQ7O0FBRUE7O0lBRUksa0NBQW1EO0FBQ3ZEOztBQUVBOztJQUVJLHdDQUF5RDtBQUM3RDs7QUFFQTs7SUFFSSxrQ0FBbUQ7QUFDdkQiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyXHJcbntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgY29sb3I6ICM5OWY3NDE7IDtcclxufVxyXG5cclxuLmNvbnRhaW5lclxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuI3BhZHNDb250YWluZXJcclxue1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG59XHJcblxyXG4jcmVjb3JkQnV0dG9uXHJcbntcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuI3BsYXlSZWNvcmRCdXR0b25cclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWNvcmRCdXR0b25cclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uXFxcXGFzc2V0c1xcXFxpY29uc1xcXFxyZWNvcmQtYnV0dG9uLnBuZyk7XHJcbn1cclxuXHJcbi5yZWNvcmRCdXR0b25SZWNvcmRpbmdcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uXFxcXGFzc2V0c1xcXFxpY29uc1xcXFxyZWNvcmQtYnV0dG9uLXJlY29yZGluZy5wbmcpO1xyXG59XHJcblxyXG4ucGxheVJlY29yZEJ1dHRvblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi5cXFxcYXNzZXRzXFxcXGljb25zXFxcXHBsYXktcmVjb3JkLnBuZyk7XHJcbn1cclxuXHJcbi5wbGF5UmVjb3JkQnV0dG9uUGxheWluZ1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi5cXFxcYXNzZXRzXFxcXGljb25zXFxcXHBsYXktcmVjb3JkLXBsYXlpbmcucG5nKTtcclxufVxyXG5cclxuLnBsYXlCdXR0b25cclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uXFxcXGFzc2V0c1xcXFxpY29uc1xcXFxwbGF5LWJ1dHRvbi5wbmcpO1xyXG59XHJcblxyXG4ucGxheUJ1dHRvblBsYXlpbmdcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uXFxcXGFzc2V0c1xcXFxpY29uc1xcXFxwbGF5LWJ1dHRvbi1wbGF5aW5nLnBuZyk7XHJcbn1cclxuXHJcbi5zdG9wQnV0dG9uXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLlxcXFxhc3NldHNcXFxcaWNvbnNcXFxcc3RvcC1idXR0b24ucG5nKTtcclxufVxyXG5cclxuLnN0b3BCdXR0b25TdG9wcGluZ1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi5cXFxcYXNzZXRzXFxcXGljb25zXFxcXHN0b3AtYnV0dG9uLXN0b3BwaW5nLnBuZyk7XHJcbn1cclxuXHJcbi5kaXNwbGF5ZWRcclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm9wZXJhdGluZ0J1dHRvblxyXG57XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLnBhZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbi5wYWQudW5wcmVzc2VkUGFkXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDg3LCAyMDEpO1xyXG59XHJcblxyXG4ucGFkLnByZXNzZWRQYWRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAyMDIsIDIwMik7XHJcbn1cclxuXHJcbiNwYWQwXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLlxcXFxhc3NldHNcXFxcaWNvbnNcXFxcc2NyYXRjaC5wbmcpO1xyXG59XHJcblxyXG4jcGFkMVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi5cXFxcYXNzZXRzXFxcXGljb25zXFxcXHN1Yndvb2Zlci5wbmcpO1xyXG59XHJcblxyXG4jcGFkMlxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi5cXFxcYXNzZXRzXFxcXGljb25zXFxcXGJhc3MtZ3VpdGFyLnBuZyk7XHJcbn1cclxuXHJcbiNwYWQzXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLlxcXFxhc3NldHNcXFxcaWNvbnNcXFxcZ3VpdGFyLnBuZyk7XHJcbn1cclxuXHJcbiNwYWQ0XHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLlxcXFxhc3NldHNcXFxcaWNvbnNcXFxcZHJ1bXMucG5nKTtcclxufVxyXG5cclxuI3BhZDVcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uXFxcXGFzc2V0c1xcXFxpY29uc1xcXFxkYXJidWthLnBuZyk7XHJcbn1cclxuXHJcbiNwYWQ2XHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLlxcXFxhc3NldHNcXFxcaWNvbnNcXFxcbWl4ZXIucG5nKTtcclxufVxyXG5cclxuI3BhZDdcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uXFxcXGFzc2V0c1xcXFxpY29uc1xcXFxsaXR0bGUtZHJ1bS5wbmcpO1xyXG59XHJcblxyXG4jcGFkOFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi5cXFxcYXNzZXRzXFxcXGljb25zXFxcXHBpYW5vLnBuZyk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
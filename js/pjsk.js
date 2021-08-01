"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurveType = exports.NoteType = void 0;
var NoteType;
(function (NoteType) {
    NoteType[NoteType["Tap"] = 0] = "Tap";
    NoteType[NoteType["Flick"] = 1] = "Flick";
    NoteType[NoteType["SlideStart"] = 2] = "SlideStart";
    NoteType[NoteType["SlideInvisible"] = 3] = "SlideInvisible";
    NoteType[NoteType["SlideVisible"] = 4] = "SlideVisible";
    NoteType[NoteType["SlideEndDefault"] = 5] = "SlideEndDefault";
    NoteType[NoteType["SlideEndFlick"] = 6] = "SlideEndFlick";
})(NoteType = exports.NoteType || (exports.NoteType = {}));
var CurveType;
(function (CurveType) {
    CurveType[CurveType["None"] = 0] = "None";
    CurveType[CurveType["Linear"] = 1] = "Linear";
    CurveType[CurveType["EaseIn"] = 2] = "EaseIn";
    CurveType[CurveType["EaseOut"] = 3] = "EaseOut";
    CurveType[CurveType["EaseInOut"] = 4] = "EaseInOut";
    CurveType[CurveType["CubicBezier"] = 5] = "CubicBezier";
})(CurveType = exports.CurveType || (exports.CurveType = {}));

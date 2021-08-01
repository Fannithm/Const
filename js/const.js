"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapTypeInfo = exports.DiffColor = exports.ResourceTypeName = void 0;
exports.ResourceTypeName = {
    [0 /* Other */]: 'Other',
    [1 /* Meta */]: 'Meta',
    [2 /* Map */]: 'Map',
    [3 /* Audio */]: 'Audio',
    [4 /* Image */]: 'Image',
    [5 /* Video */]: 'Video',
    [6 /* Script */]: 'Script'
};
var DiffColor;
(function (DiffColor) {
    DiffColor["BLUE"] = "blue";
    DiffColor["GREEN"] = "green";
    DiffColor["YELLOW"] = "yellow";
    DiffColor["RED"] = "red";
    DiffColor["PURPLE"] = "purple";
    DiffColor["PINK"] = "pink";
})(DiffColor = exports.DiffColor || (exports.DiffColor = {}));
exports.MapTypeInfo = {
    [0 /* PJSK */]: {
        name: 'Project Sekai',
        version: 1
    },
    [1 /* BANG */]: {
        name: 'BanG Dream',
        version: 1
    }
};

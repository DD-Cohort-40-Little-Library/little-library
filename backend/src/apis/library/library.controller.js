"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteLibraryController = exports.putLibraryController = exports.getLibraryByLibraryIdAndLibraryProfileIdController = exports.postLibrary = exports.getLibraryByLibraryIdController = exports.getLibraryByLibraryProfileIdController = exports.getAllLibrariesOptInController = exports.getAllLibrariesController = void 0;
var Library_1 = require("../../utils/models/Library");
function getAllLibrariesController(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var data, status_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, Library_1.selectAllLibraries)()
                        // return the response
                    ];
                case 1:
                    data = _a.sent();
                    status_1 = { status: 200, message: null, data: data };
                    return [2 /*return*/, response.json(status_1)];
                case 2:
                    error_1 = _a.sent();
                    return [2 /*return*/, response.json({
                            status: 500,
                            message: '',
                            data: []
                        })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllLibrariesController = getAllLibrariesController;
function getAllLibrariesOptInController(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var data, status_2, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, Library_1.selectAllLibrariesOptIn)()
                        // return the response
                    ];
                case 1:
                    data = _a.sent();
                    status_2 = { status: 200, message: null, data: data };
                    return [2 /*return*/, response.json(status_2)];
                case 2:
                    error_2 = _a.sent();
                    return [2 /*return*/, response.json({
                            status: 500,
                            message: '',
                            data: []
                        })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllLibrariesOptInController = getAllLibrariesOptInController;
function getLibraryByLibraryProfileIdController(request, response, nextFunction) {
    return __awaiter(this, void 0, void 0, function () {
        var libraryProfileId, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    libraryProfileId = request.params.libraryProfileId;
                    return [4 /*yield*/, (0, Library_1.selectLibrariesByLibraryProfileId)(libraryProfileId)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, response.json({ status: 200, message: null, data: data })];
                case 2:
                    error_3 = _a.sent();
                    return [2 /*return*/, response.json({
                            status: 500,
                            message: '',
                            data: []
                        })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getLibraryByLibraryProfileIdController = getLibraryByLibraryProfileIdController;
function getLibraryByLibraryIdController(request, response, nextFunction) {
    return __awaiter(this, void 0, void 0, function () {
        var libraryId, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    libraryId = request.params.libraryId;
                    return [4 /*yield*/, (0, Library_1.selectLibraryByLibraryId)(libraryId)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, response.json({ status: 200, message: null, data: data })];
                case 2:
                    error_4 = _a.sent();
                    return [2 /*return*/, response.json({
                            status: 500,
                            message: '',
                            data: null
                        })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getLibraryByLibraryIdController = getLibraryByLibraryIdController;
function postLibrary(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType, profile, libraryProfileId, library, message, error_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = request.body, libraryAddress = _a.libraryAddress, libraryDescription = _a.libraryDescription, libraryEventOptIn = _a.libraryEventOptIn, libraryLat = _a.libraryLat, libraryLng = _a.libraryLng, libraryName = _a.libraryName, librarySpecialization = _a.librarySpecialization, libraryType = _a.libraryType;
                    profile = request.session.profile;
                    libraryProfileId = profile.profileId;
                    library = { libraryId: null, libraryProfileId: libraryProfileId, libraryAddress: libraryAddress, libraryDescription: libraryDescription, libraryEventOptIn: libraryEventOptIn, libraryLat: libraryLat, libraryLng: libraryLng, libraryName: libraryName, librarySpecialization: librarySpecialization, libraryType: libraryType };
                    return [4 /*yield*/, (0, Library_1.insertLibrary)(library)];
                case 1:
                    message = _b.sent();
                    return [2 /*return*/, response.json({ status: 200, data: null, message: message })];
                case 2:
                    error_5 = _b.sent();
                    console.error(error_5);
                    return [2 /*return*/, response.json({
                            status: 500,
                            message: 'Error creating the library. Try again later.',
                            data: null
                        })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.postLibrary = postLibrary;
function getLibraryByLibraryIdAndLibraryProfileIdController(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, libraryId, libraryProfileId, libraryAddress, libraryDescription, libraryEventOptIn, libraryName, librarySpecialization, data, error_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = request.body, libraryId = _a.libraryId, libraryProfileId = _a.libraryProfileId, libraryAddress = _a.libraryAddress, libraryDescription = _a.libraryDescription, libraryEventOptIn = _a.libraryEventOptIn, libraryName = _a.libraryName, librarySpecialization = _a.librarySpecialization;
                    return [4 /*yield*/, (0, Library_1.selectLibraryByLibraryIdAndLibraryProfileId)(libraryId, libraryProfileId)];
                case 1:
                    data = _b.sent();
                    return [2 /*return*/, response.json({
                            status: 200,
                            message: '',
                            data: null
                        })];
                case 2:
                    error_6 = _b.sent();
                    return [2 /*return*/, response.json({
                            status: 500,
                            message: '',
                            data: null
                        })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getLibraryByLibraryIdAndLibraryProfileIdController = getLibraryByLibraryIdAndLibraryProfileIdController;
// @ts-ignore
function putLibraryController(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var libraryId, profile, libraryProfileId, _a, libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType, previousLibrary, updatedValues, newLibrary, message, error_7;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    libraryId = request.params.libraryId;
                    profile = request.session.profile;
                    libraryProfileId = profile.profileId;
                    _a = request.body, libraryAddress = _a.libraryAddress, libraryDescription = _a.libraryDescription, libraryEventOptIn = _a.libraryEventOptIn, libraryLat = _a.libraryLat, libraryLng = _a.libraryLng, libraryName = _a.libraryName, librarySpecialization = _a.librarySpecialization, libraryType = _a.libraryType;
                    return [4 /*yield*/, (0, Library_1.selectLibraryByLibraryId)(libraryId)];
                case 1:
                    previousLibrary = _b.sent();
                    if (previousLibrary === null) {
                        return [2 /*return*/, response.json({ status: 404, data: null, message: 'Library does not exist' })];
                    }
                    if (previousLibrary.libraryProfileId !== libraryProfileId) {
                        return [2 /*return*/, response.json({ status: 404, data: null, message: 'You are not allowed to perform this task!' })];
                    }
                    updatedValues = { libraryAddress: libraryAddress, libraryDescription: libraryDescription, libraryEventOptIn: libraryEventOptIn, libraryLat: libraryLat, libraryLng: libraryLng, libraryName: libraryName, librarySpecialization: librarySpecialization, libraryType: libraryType };
                    newLibrary = __assign(__assign({}, previousLibrary), updatedValues);
                    return [4 /*yield*/, (0, Library_1.updateLibrary)(newLibrary)
                        // console.log(message)
                        // console.log(newLibrary)
                    ];
                case 2:
                    message = _b.sent();
                    // console.log(message)
                    // console.log(newLibrary)
                    return [2 /*return*/, response.json({ status: 200, data: null, message: message })];
                case 3:
                    error_7 = _b.sent();
                    return [2 /*return*/, response.json({ status: 500, data: null, message: 'Internal server error' })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.putLibraryController = putLibraryController;
function deleteLibraryController(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var libraryId, profile, libraryProfileId, previousLibrary, message, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    libraryId = request.params.libraryId;
                    profile = request.session.profile;
                    libraryProfileId = profile.profileId;
                    return [4 /*yield*/, (0, Library_1.selectLibraryByLibraryId)(libraryId)];
                case 1:
                    previousLibrary = _a.sent();
                    if (previousLibrary === null) {
                        return [2 /*return*/, response.json({ status: 404, data: null, message: 'Library does not exist' })];
                    }
                    if (previousLibrary.libraryProfileId !== libraryProfileId) {
                        return [2 /*return*/, response.json({ status: 404, data: null, message: 'You are not allowed to perform this task!' })];
                    }
                    return [4 /*yield*/, (0, Library_1.deleteLibrary)(previousLibrary)];
                case 2:
                    message = _a.sent();
                    return [2 /*return*/, response.json({ status: 200, data: null, message: message })];
                case 3:
                    error_8 = _a.sent();
                    return [2 /*return*/, response.json({ status: 500, data: null, message: 'internal server error' })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteLibraryController = deleteLibraryController;

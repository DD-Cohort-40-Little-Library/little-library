"use strict";
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
var Library_1 = require("../models/Library");
var auth_utils_1 = require("../auth.utils");
var Profile_1 = require("../models/Profile");
var fs = require('fs');
var csv = require('csv-parser');
function LLibraryDataDownloader() {
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, downloadLibraries()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return main();
    function downloadLibraries() {
        return __awaiter(this, void 0, void 0, function () {
            var results_1;
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    results_1 = [];
                    fs.createReadStream('./library-abq-all.csv')
                        .pipe(csv())
                        .on('data', function (data) { return results_1.push(data); })
                        .on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                        var profileHash1, profile1, profileHash2, profile2, profileId1, profileId2, _i, results_2, result, littleLibrary, _a, _b, publicLibrary, _c, _d, error_2;
                        return __generator(this, function (_e) {
                            switch (_e.label) {
                                case 0:
                                    _e.trys.push([0, 11, , 12]);
                                    return [4 /*yield*/, (0, auth_utils_1.setHash)("ILikeFakePasswordsWithNoSpaces")];
                                case 1:
                                    profileHash1 = _e.sent();
                                    profile1 = {
                                        profileId: null,
                                        profileActivationToken: null,
                                        profileAvatarUrl: "https://dangerousminds.net/content/uploads/images/throwpillow,36x36,750x1000-bg,f8f8f8.jpg",
                                        profileEmail: "mxFakeAccount+1@fake-acounts.rus",
                                        profileFirstName: "Private",
                                        profileHash: profileHash1,
                                        profileLastName: "Libraries",
                                        profileName: "MurrayTheFirst"
                                    };
                                    return [4 /*yield*/, (0, auth_utils_1.setHash)("SecondILikeFakePasswordsWithNoSpaces")];
                                case 2:
                                    profileHash2 = _e.sent();
                                    profile2 = {
                                        profileId: null,
                                        profileActivationToken: null,
                                        profileAvatarUrl: "https://dangerousminds.net/content/uploads/images/61ubRnaBlwL._SL1000_.jpg",
                                        profileEmail: "SecondMxFakeAccount+1@fake-acounts.rus",
                                        profileFirstName: "Public",
                                        profileHash: profileHash2,
                                        profileLastName: "Libraries",
                                        profileName: "MurrayTheSecond"
                                    };
                                    return [4 /*yield*/, (0, Profile_1.insertProfile)(profile1)];
                                case 3:
                                    profileId1 = _e.sent();
                                    return [4 /*yield*/, (0, Profile_1.insertProfile)(profile2)];
                                case 4:
                                    profileId2 = _e.sent();
                                    _i = 0, results_2 = results_1;
                                    _e.label = 5;
                                case 5:
                                    if (!(_i < results_2.length)) return [3 /*break*/, 10];
                                    result = results_2[_i];
                                    if (!(result.libraryType === 'Little Library')) return [3 /*break*/, 7];
                                    littleLibrary = {
                                        libraryId: null,
                                        libraryProfileId: profileId1,
                                        libraryAddress: result['library_address'],
                                        libraryDescription: result['library_description'],
                                        libraryEventOptIn: result['library_event_opt_in'],
                                        libraryLat: result['library_lat'],
                                        libraryLng: result['library_lng'],
                                        libraryName: result['library_name'],
                                        librarySpecialization: result['library_specialization'],
                                        libraryType: result['library_type']
                                    };
                                    _b = (_a = console).log;
                                    return [4 /*yield*/, (0, Library_1.insertLibrary)(littleLibrary)];
                                case 6:
                                    _b.apply(_a, [_e.sent()]);
                                    return [3 /*break*/, 9];
                                case 7:
                                    publicLibrary = {
                                        libraryId: null,
                                        libraryProfileId: profileId2,
                                        libraryAddress: result['library_address'],
                                        libraryDescription: result['library_description'],
                                        libraryEventOptIn: result['library_event_opt_in'],
                                        libraryLat: result['library_lat'],
                                        libraryLng: result['library_lng'],
                                        libraryName: result['library_name'],
                                        librarySpecialization: result['library_specialization'],
                                        libraryType: result['library_type']
                                    };
                                    _d = (_c = console).log;
                                    return [4 /*yield*/, (0, Library_1.insertLibrary)(publicLibrary)];
                                case 8:
                                    _d.apply(_c, [_e.sent()]);
                                    _e.label = 9;
                                case 9:
                                    _i++;
                                    return [3 /*break*/, 5];
                                case 10: return [3 /*break*/, 12];
                                case 11:
                                    error_2 = _e.sent();
                                    throw error_2;
                                case 12: return [2 /*return*/];
                            }
                        });
                    }); });
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    }
}
LLibraryDataDownloader()
    .then(function (finished) {
    console.log("finished");
})["catch"](function (error) {
    console.error(error);
});

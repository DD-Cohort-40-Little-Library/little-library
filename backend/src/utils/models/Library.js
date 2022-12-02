"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
exports.deleteLibrary = exports.updateLibrary = exports.selectLibraryByLibraryIdAndLibraryProfileId = exports.selectLibrariesByLibraryProfileId = exports.selectLibraryByLibraryId = exports.selectAllLibrariesOptIn = exports.selectAllLibraries = exports.insertLibrary = void 0;
var database_utils_1 = require("../database.utils");
// export interface PartialLibrary {
//     libraryId: string|null
//     libraryProfileId: string
//     libraryAddress: string
//     libraryDescription: string
//     libraryEventOptIn: boolean
//     libraryName: string
//     librarySpecialization: string
// }
function insertLibrary(library) {
    return __awaiter(this, void 0, void 0, function () {
        var libraryProfileId, libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    libraryProfileId = library.libraryProfileId, libraryAddress = library.libraryAddress, libraryDescription = library.libraryDescription, libraryEventOptIn = library.libraryEventOptIn, libraryLat = library.libraryLat, libraryLng = library.libraryLng, libraryName = library.libraryName, librarySpecialization = library.librarySpecialization, libraryType = library.libraryType;
                    return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["INSERT INTO library(library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type) VALUES(gen_random_uuid(), ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ")"], ["INSERT INTO library(library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type) VALUES(gen_random_uuid(), ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ", ")"])), libraryProfileId, libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, 'Library created successfully!'];
            }
        });
    });
}
exports.insertLibrary = insertLibrary;
function selectAllLibraries() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["SELECT library_id,  library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library"], ["SELECT library_id,  library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library"])))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.selectAllLibraries = selectAllLibraries;
function selectAllLibrariesOptIn() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["SELECT library_id,  library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_event_opt_in = true"], ["SELECT library_id,  library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_event_opt_in = true"])))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.selectAllLibrariesOptIn = selectAllLibrariesOptIn;
function selectLibraryByLibraryId(libraryId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["SELECT library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_id = ", ""], ["SELECT library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_id = ", ""])), libraryId)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, (result === null || result === void 0 ? void 0 : result.length) === 1 ? result[0] : null];
            }
        });
    });
}
exports.selectLibraryByLibraryId = selectLibraryByLibraryId;
function selectLibrariesByLibraryProfileId(libraryProfileId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["SELECT library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_profile_id = ", ""], ["SELECT library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_profile_id = ", ""])), libraryProfileId)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.selectLibrariesByLibraryProfileId = selectLibrariesByLibraryProfileId;
// delete selectPartialLibraryByLibraryId
// export async function selectPartialLibraryByLibraryId (libraryId: string): Promise<Library[]> {
//     return <Library[]> await sql `SELECT library_id, library_address, library_description, library_name, library_specialization FROM library WHERE library_id = ${libraryId}`
// }
function selectLibraryByLibraryIdAndLibraryProfileId(libraryId, libraryProfileId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["SELECT library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_id = ", " AND library_profile_id = ", ""], ["SELECT library_id, library_profile_id, library_address, library_description, library_event_opt_in, library_lat, library_lng, library_name, library_specialization, library_type FROM library WHERE library_id = ", " AND library_profile_id = ", ""])), libraryId, libraryProfileId)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, (result === null || result === void 0 ? void 0 : result.length) === 1 ? result[0] : null];
            }
        });
    });
}
exports.selectLibraryByLibraryIdAndLibraryProfileId = selectLibraryByLibraryIdAndLibraryProfileId;
function updateLibrary(library) {
    return __awaiter(this, void 0, void 0, function () {
        var libraryId, libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    libraryId = library.libraryId, libraryAddress = library.libraryAddress, libraryDescription = library.libraryDescription, libraryEventOptIn = library.libraryEventOptIn, libraryLat = library.libraryLat, libraryLng = library.libraryLng, libraryName = library.libraryName, librarySpecialization = library.librarySpecialization, libraryType = library.libraryType;
                    return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["UPDATE library SET library_address = ", ", library_description = ", ", library_event_opt_in = ", ", library_lat = ", ", library_lng = ", ", library_name = ", ", library_specialization = ", ", library_type = ", " WHERE library_id = ", ""], ["UPDATE library SET library_address = ", ", library_description = ", ", library_event_opt_in = ", ", library_lat = ", ", library_lng = ", ", library_name = ", ", library_specialization = ", ", library_type = ", " WHERE library_id = ", ""])), libraryAddress, libraryDescription, libraryEventOptIn, libraryLat, libraryLng, libraryName, librarySpecialization, libraryType, libraryId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, 'Library updated successfully!'];
            }
        });
    });
}
exports.updateLibrary = updateLibrary;
function deleteLibrary(library) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["DELETE FROM library WHERE library_id = ", ""], ["DELETE FROM library WHERE library_id = ", ""])), library.libraryId)];
                case 1:
                    result = _a.sent();
                    if (result.count < 0) {
                        return [2 /*return*/, 'Library does not exist'];
                    }
                    return [2 /*return*/, 'Library was deleted.'];
            }
        });
    });
}
exports.deleteLibrary = deleteLibrary;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

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
exports.deleteProfile = exports.selectWholeProfileByProfileId = exports.selectPartialProfileByProfileId = exports.selectProfileByProfileEmail = exports.updateProfile = exports.selectProfileByProfileActivationToken = exports.insertProfile = void 0;
var database_utils_1 = require("../database.utils");
function insertProfile(profile) {
    return __awaiter(this, void 0, void 0, function () {
        var profileId, profileActivationToken, profileAvatarUrl, profileEmail, profileFirstName, profileHash, profileLastName, profileName, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    profileId = profile.profileId, profileActivationToken = profile.profileActivationToken, profileAvatarUrl = profile.profileAvatarUrl, profileEmail = profile.profileEmail, profileFirstName = profile.profileFirstName, profileHash = profile.profileHash, profileLastName = profile.profileLastName, profileName = profile.profileName;
                    return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["INSERT INTO profile(profile_id, profile_activation_token, profile_avatar_url, profile_email, profile_first_name, profile_hash, profile_last_name, profile_name) VALUES (gen_random_uuid(), ", ", ", ", ", ", ", ", ", ", ", ", ", ") returning profile_id"], ["INSERT INTO profile(profile_id, profile_activation_token, profile_avatar_url, profile_email, profile_first_name, profile_hash, profile_last_name, profile_name) VALUES (gen_random_uuid(), ", ", ", ", ", ", ", ", ", ", ", ", ", ") returning profile_id"])), profileActivationToken, profileAvatarUrl, profileEmail, profileFirstName, profileHash, profileLastName, profileName)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result[0].profileId];
            }
        });
    });
}
exports.insertProfile = insertProfile;
function selectProfileByProfileActivationToken(profileActivationToken) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["SELECT profile_id, profile_activation_token, profile_avatar_url, profile_email, profile_first_name, profile_hash, profile_last_name, profile_name FROM profile WHERE profile_activation_token = ", ""], ["SELECT profile_id, profile_activation_token, profile_avatar_url, profile_email, profile_first_name, profile_hash, profile_last_name, profile_name FROM profile WHERE profile_activation_token = ", ""])), profileActivationToken)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, (result === null || result === void 0 ? void 0 : result.length) === 1 ? result[0] : null];
            }
        });
    });
}
exports.selectProfileByProfileActivationToken = selectProfileByProfileActivationToken;
function updateProfile(profile) {
    return __awaiter(this, void 0, void 0, function () {
        var profileId, profileActivationToken, profileAvatarUrl, profileEmail, profileFirstName, profileHash, profileLastName, profileName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    profileId = profile.profileId, profileActivationToken = profile.profileActivationToken, profileAvatarUrl = profile.profileAvatarUrl, profileEmail = profile.profileEmail, profileFirstName = profile.profileFirstName, profileHash = profile.profileHash, profileLastName = profile.profileLastName, profileName = profile.profileName;
                    return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["UPDATE profile SET profile_activation_token = ", ", profile_avatar_url = ", ", profile_email = ", ", profile_first_name = ", ", profile_hash = ", ", profile_last_name = ", ", profile_name = ", " WHERE profile_id =", ""], ["UPDATE profile SET profile_activation_token = ", ", profile_avatar_url = ", ", profile_email = ", ", profile_first_name = ", ", profile_hash = ", ", profile_last_name = ", ", profile_name = ", " WHERE profile_id =", ""])), profileActivationToken, profileAvatarUrl, profileEmail, profileFirstName, profileHash, profileLastName, profileName, profileId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, 'Profile successfully updated.'];
            }
        });
    });
}
exports.updateProfile = updateProfile;
function selectProfileByProfileEmail(profileEmail) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["SELECT profile_id, profile_activation_token, profile_avatar_url, profile_email,profile_first_name, profile_hash, profile_last_name, profile_name FROM profile WHERE profile_email = ", ""], ["SELECT profile_id, profile_activation_token, profile_avatar_url, profile_email,profile_first_name, profile_hash, profile_last_name, profile_name FROM profile WHERE profile_email = ", ""])), profileEmail)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, (result === null || result === void 0 ? void 0 : result.length) === 1 ? result[0] : null];
            }
        });
    });
}
exports.selectProfileByProfileEmail = selectProfileByProfileEmail;
function selectPartialProfileByProfileId(profileId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["SELECT profile_id, profile_avatar_url, profile_email, profile_first_name, profile_last_name, profile_name FROM profile WHERE profile_id = ", ""], ["SELECT profile_id, profile_avatar_url, profile_email, profile_first_name, profile_last_name, profile_name FROM profile WHERE profile_id = ", ""])), profileId)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, (result === null || result === void 0 ? void 0 : result.length) === 1 ? result[0] : null];
            }
        });
    });
}
exports.selectPartialProfileByProfileId = selectPartialProfileByProfileId;
function selectWholeProfileByProfileId(profileId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["SELECT profile_id, profile_activation_token, profile_avatar_url,  profile_email, profile_first_name, profile_hash, profile_last_name, profile_name FROM profile WHERE profile_id = ", ""], ["SELECT profile_id, profile_activation_token, profile_avatar_url,  profile_email, profile_first_name, profile_hash, profile_last_name, profile_name FROM profile WHERE profile_id = ", ""])), profileId)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, (result === null || result === void 0 ? void 0 : result.length) === 1 ? result[0] : null];
            }
        });
    });
}
exports.selectWholeProfileByProfileId = selectWholeProfileByProfileId;
function deleteProfile(profile) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, database_utils_1.sql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["DELETE FROM profile WHERE profile_id = ", ""], ["DELETE FROM profile WHERE profile_id = ", ""])), profile.profileId)];
                case 1:
                    result = _a.sent();
                    if (result.count < 0) {
                        return [2 /*return*/, 'Profile does not exist!'];
                    }
                    return [2 /*return*/, 'Profile was deleted.'];
            }
        });
    });
}
exports.deleteProfile = deleteProfile;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

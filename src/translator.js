"use strict";
/*

Description: A simple and practical way to translate texts!
Made by: Snarloff (OneUX Founder) & Buzz (OneUX Moderator)
Github: https://github.com/Snarloff & https://github.com/pietro222222
OneUX: https://github.com/OneUXBrasil
Version: 1.0.8

*/
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
var axios_1 = require("axios");
var fs = require('fs');
var path = require('path');
var languages = {
    Afrikaans: "af",
    Irish: "ga",
    Albanian: "sq",
    Italian: "it",
    Arabic: "ar",
    Japanese: "ja",
    Azerbaijani: "az",
    Kannada: "kn",
    Basque: "eu",
    Korean: "ko",
    Bengali: "bn",
    Latin: "la",
    Belarusian: "be",
    Latvian: "lv",
    Bulgarian: "bg",
    Lithuanian: "lt",
    Catalan: "ca",
    Macedonian: "mk",
    Chinese_Simplified: "zh-CN",
    Malay: "ms",
    Chinese_Traditional: "zh-TW",
    Maltese: "mt",
    Croatian: "hr",
    Norwegian: "no",
    Czech: "cs",
    Persian: "fa",
    Danish: "da",
    Polish: "pl",
    Dutch: "nl",
    Portuguese: "pt",
    English: "en",
    Romanian: "ro",
    Esperanto: "eo",
    Russian: "ru",
    Estonian: "et",
    Serbian: "sr",
    Filipino: "tl",
    Slovak: "sk",
    Finnish: "fi",
    Slovenian: "sl",
    French: "fr",
    Spanish: "es",
    Galician: "gl",
    Swahili: "sw",
    Georgian: "ka",
    Swedish: "sv",
    German: "de",
    Tamil: "ta",
    Greek: "el",
    Telugu: "te",
    Gujarati: "gu",
    Thai: "th",
    Haitian_Creole: "ht",
    Turkish: "tr",
    Hebrew: "iw",
    Ukrainian: "uk",
    Hindi: "hi",
    Urdu: "ur",
    Hungarian: "hu",
    Vietnamese: "vi",
    Icelandic: "is",
    Welsh: "cy",
    Indonesian: "id",
    Yiddish: "yi"
};
function translate(from, to, text) {
    return __awaiter(this, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            url = "http://translate.googleapis.com/translate_a/single?client=gtx&sl=" + from + "&tl=" + to + "&dt=t&q=" + text + "&ie=UTF-8&oe=UTF-8";
            return [2 /*return*/, axios_1["default"].get(url) //Returns raw translation, in String format
                    .then(function (data) {
                    return String(data.data[0][0][0]);
                })["catch"](function (err) {
                    return err;
                })];
        });
    });
}
function translateFile(data) {
    return __awaiter(this, void 0, void 0, function () {
        var file, ext, from, to;
        return __generator(this, function (_a) {
            file = data.file, ext = data.ext, from = data.from, to = data.to;
            if (ext === 'txt' || ext === '.txt' || ext === 'text' || ext == undefined) {
                [2 /*return*/, fs.readFileSync(path.join(__dirname, "" + file.trim()), 'utf-8').split(/\r?\n/).forEach(function (line) {
                        var url = "http://translate.googleapis.com/translate_a/single?client=gtx&sl=" + from + "&tl=" + to + "&dt=t&q=" + line + "&ie=UTF-8&oe=UTF-8";
                        return axios_1["default"].get(url)
                            .then(function (data) {
                            return String(data.data[0][0][0]);
                        })["catch"](function (err) {
                            return err;
                        });
                    })];
            }
            return [2 /*return*/];
        });
    });
}

// async function teste()
// {
//     console.log(await translateFile({
//         file: 'teste.txt',
//         ext: 'txt',
//         from: 'en',
//         to: 'pt-br'

//     }))
// }

// teste()

exports["default"] = {
    translate: translate,
    languages: languages
};

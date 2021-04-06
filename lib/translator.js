"use strict";
/*

Description: A simple and practical way to translate texts!
Made by: Snarloff (OneUX Founder) & Buzz (OneUX Moderator)
Github: https://github.com/Snarloff & https://github.com/pietro222222
OneUX: https://github.com/OneUX
Version: 1.0.5

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const languages = {
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
function translate(from, to, text, raw) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = `http://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${text}&ie=UTF-8&oe=UTF-8`;
        if (raw === true) {
            /*
            Returns raw translation, without using Promise
            */
            return axios_1.default.get(url)
                .then((data) => {
                return String(data.data[0][0][0]);
            })
                .catch();
        }
        else {
            // BETA - DOESN'T WORKS CORRECLY YEY
            return new Promise((resolve, reject) => {
                axios_1.default.get(url).then((data) => {
                    if (data.status == 200) {
                        resolve(data.data[0][0][0].toString());
                    }
                    else {
                        return;
                    }
                }).catch((err) => {
                    reject(err);
                });
            });
        }
    });
}
// translate(`en`, `pt`, `test`, true)
exports.default = {
    translate,
    languages
};
//# sourceMappingURL=translator.js.map
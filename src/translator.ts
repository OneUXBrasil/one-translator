/*
Snarloff favor aprenda a usar Typescript.
Description: A simple and practical way to translate texts!
Made by: Snarloff (OneUX Founder) & Buzz (OneUX Moderator) & yxqsnz (OneUx developer team)
Github: https://github.com/Snarloff & https://github.com/pietro222222 & https://github.com/yxqsnz
OneUX: https://github.com/OneUXBrasil
Version: 1.1.4

*/

import axios from "axios";
import * as fs from "fs";

type language =
  | "af"
  | "ga"
  | "sq"
  | "it"
  | "ar"
  | "ja"
  | "az"
  | "kn"
  | "eu"
  | "ko"
  | "bn"
  | "la"
  | "be"
  | "lv"
  | "bg"
  | "lt"
  | "ca"
  | "mk"
  | "zh-CN"
  | "ms"
  | "zh-TW"
  | "mt"
  | "hr"
  | "no"
  | "cs"
  | "fa"
  | "da"
  | "pl"
  | "nl"
  | "pt"
  | "en"
  | "ro"
  | "eo"
  | "ru"
  | "et"
  | "sr"
  | "tl"
  | "sk"
  | "fi"
  | "sl"
  | "fr"
  | "es"
  | "gl"
  | "sw"
  | "ka"
  | "sv"
  | "de"
  | "ta"
  | "el"
  | "te"
  | "gu"
  | "th"
  | "ht"
  | "tr"
  | "iw"
  | "uk"
  | "hi"
  | "ur"
  | "hu"
  | "vi"
  | "is"
  | "cy"
  | "id"
  | "yi"
  | "auto";

export const languages = {
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
  Yiddish: "yi",
};

/**
 * Translate texts and return raw translation, in String format
 * @function translate
 * @param {String} from  Language of the inserted text
 * @param {String} to    Language to be translated
 * @param {String} text  Text to be translated
 * @return {String}      Returns the translated text in String format
 */
export async function translate(
  from: language,
  to: language,
  text: string
): Promise<String> {
  let url = `http://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${text}&ie=UTF-8&oe=UTF-8`;

  return axios
    .get(url)
    .then((data) => {
      return String(data.data[0][0][0]);
    })
    .catch((err) => {
      return err;
    });
}

interface Provider {
  save: boolean;
  savePath: string;
}

/**
 * Translate file texts and return raw translation, in String format
 * @function translate
 * @param {String} from      Language of the inserted text
 * @param {String} to        Language to be translated
 * @param {String} fileText  File Text to be translated
 * @param {Object} settings  Some more settings
 * @return {String}          Returns the translated text in String format
 */
export async function translateFile(
  from: language,
  to: language,
  filePath: string,
  settings: Provider
): Promise<String> {
  const { save = false, savePath = `./${filePath}-translated.txt` } = settings;

  const fileContent = fs
    .readFileSync(filePath, "utf-8")
    .trim()
    .split(`\n`)
    .filter((text: string) => text != ``);
  const translated: String[] = [];

  for (const line of fileContent)
    await translated.push(await translate(from, to, line));

  if (save) {
    fs.writeFile(savePath, translated.join("\n"), (err: any) => {
      if (err) {
        throw new  err
      } 
    });
  }

  return translated.join("\n");
}

//Snarloff por favor APRENDA TS.
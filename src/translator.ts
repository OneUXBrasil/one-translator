/*

Description: A simple and practical way to translate texts!
Made by: Snarloff (OneUX Founder) & Buzz (OneUX Moderator)
Github: https://github.com/Snarloff & https://github.com/pietro222222
OneUX: https://github.com/OneUXBrasil
Version: 1.0.5

*/


import axios from "axios"

type language = "af" | "ga" | "sq" | "it" | "ar" | "ja" | "az" | "kn" | "eu" | "ko" | "bn" | "la" | "be" | "lv" | "bg" | "lt" | "ca" | "mk" | "zh-CN" | "ms" | "zh-TW" | "mt" | "hr" | "no" | "cs" | "fa" | "da" | "pl" | "nl" | "pt" | "en" | "ro" | "eo" | "ru" | "et" | "sr" | "tl" | "sk" | "fi" | "sl" | "fr" | "es" | "gl" | "sw" | "ka" | "sv" | "de" | "ta" | "el" | "te" | "gu" | "th" | "ht" | "tr" | "iw" | "uk" | "hi" | "ur" | "hu" | "vi" | "is" | "cy" | "id" | "yi" | "auto"

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
}

async function translate(from: language, to: language, text: String, raw: Boolean) {

  let url =`http://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${text}&ie=UTF-8&oe=UTF-8`
  
  if (raw === true) {

    /*
    Returns raw translation, without using Promise
    */

    return axios.get(url)
      .then((data) => {
        return String(data.data[0][0][0])
      })
      .catch()

  } else {

    return new Promise((resolve, reject) => {
      axios.get(url).then((data) => {
        if (data.status == 200) { 
          resolve(data.data[0][0][0].toString())
        } else { return }
      }).catch((err) => {
        reject(err)
      })
    })

  }

}

// translate(`en`, `pt`, `test`, true)

export default {
  translate, 
  languages
}
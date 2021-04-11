/*

Description: A simple and practical way to translate texts!
Made by: Snarloff (OneUX Founder) & Buzz (OneUX Moderator)
Github: https://github.com/Snarloff & https://github.com/pietro222222
OneUX: https://github.com/OneUXBrasil
Version: 1.0.8

*/


import axios from "axios"

const fs = require('fs')
const path = require('path')

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

async function translate(from: language, to: language, text: String) {

  let url = `http://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${text}&ie=UTF-8&oe=UTF-8`

  return axios.get(url) //Returns raw translation, in String format
    .then((data) => {
      return String(data.data[0][0][0])
    })
    .catch((err) => {
      return err
    })

}

interface Provider {
  file: string,
  ext: string,
  from: language,
  to: language
}

async function translateFile(data: Provider){

  const { file, ext, from, to } = data

  if ( ext === 'txt' || ext === '.txt' || ext === 'text' || ext == undefined ) {

    return await fs.readFileSync(path.join(__dirname, `${file.trim()}`), 'utf-8').split(/\r?\n/).forEach((line: String) => {
      let result = translate(from, to, line)
      return result
    })

  }

}

// async function teste(){

//     translateFile({
//         file: 'teste.txt',
//         from: 'en',
//         to: 'pt-br'
//     }).then(result => {
//         console.log(result)
//     })
// }

// teste()

export default {
  translate, 
  languages
}
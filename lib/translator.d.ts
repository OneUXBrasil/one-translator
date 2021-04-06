declare type language = "af" | "ga" | "sq" | "it" | "ar" | "ja" | "az" | "kn" | "eu" | "ko" | "bn" | "la" | "be" | "lv" | "bg" | "lt" | "ca" | "mk" | "zh-CN" | "ms" | "zh-TW" | "mt" | "hr" | "no" | "cs" | "fa" | "da" | "pl" | "nl" | "pt" | "en" | "ro" | "eo" | "ru" | "et" | "sr" | "tl" | "sk" | "fi" | "sl" | "fr" | "es" | "gl" | "sw" | "ka" | "sv" | "de" | "ta" | "el" | "te" | "gu" | "th" | "ht" | "tr" | "iw" | "uk" | "hi" | "ur" | "hu" | "vi" | "is" | "cy" | "id" | "yi" | "auto";
declare function translate(from: language, to: language, text: String, raw: Boolean): Promise<unknown>;
declare const _default: {
    translate: typeof translate;
    languages: {
        Afrikaans: string;
        Irish: string;
        Albanian: string;
        Italian: string;
        Arabic: string;
        Japanese: string;
        Azerbaijani: string;
        Kannada: string;
        Basque: string;
        Korean: string;
        Bengali: string;
        Latin: string;
        Belarusian: string;
        Latvian: string;
        Bulgarian: string;
        Lithuanian: string;
        Catalan: string;
        Macedonian: string;
        Chinese_Simplified: string;
        Malay: string;
        Chinese_Traditional: string;
        Maltese: string;
        Croatian: string;
        Norwegian: string;
        Czech: string;
        Persian: string;
        Danish: string;
        Polish: string;
        Dutch: string;
        Portuguese: string;
        English: string;
        Romanian: string;
        Esperanto: string;
        Russian: string;
        Estonian: string;
        Serbian: string;
        Filipino: string;
        Slovak: string;
        Finnish: string;
        Slovenian: string;
        French: string;
        Spanish: string;
        Galician: string;
        Swahili: string;
        Georgian: string;
        Swedish: string;
        German: string;
        Tamil: string;
        Greek: string;
        Telugu: string;
        Gujarati: string;
        Thai: string;
        Haitian_Creole: string;
        Turkish: string;
        Hebrew: string;
        Ukrainian: string;
        Hindi: string;
        Urdu: string;
        Hungarian: string;
        Vietnamese: string;
        Icelandic: string;
        Welsh: string;
        Indonesian: string;
        Yiddish: string;
    };
};
export default _default;
//# sourceMappingURL=translator.d.ts.map
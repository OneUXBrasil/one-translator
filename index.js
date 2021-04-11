const { translateFile } = require(`./lib/translator`).default
translateFile(`en`, `pt`, `src/texte.txt`).then((data) => {
    console.log(data)
})
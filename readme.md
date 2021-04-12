A simple and practical way to translate texts and file texts!

# Usage 
   ## 1. Require the `one-translator`
```js
        const { translate, translateFile } = require('one-translator').default
```
   ## Using it
```js

        console.log(await translate(`from`, `to`, `text`)) 
           
        translate(`from`, `to`, `text`).then((data) => {
                console.log(data)
        })

```

# Translate Files
		## Without saving
```js
				console.log(await translateFile('en', 'pt-br', 'teste.txt'))

```
		## Saving

```js
			console.log(await translateFile('en', 'pt-br', 'teste.txt', {
				save: true,
				savePath: './text2.txt'
			}))
```

**save:** ``boolean not required, default false``
**savePath:** ``string not required, default your path``
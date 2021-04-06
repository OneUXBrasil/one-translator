
# Usage 
   ## 1. Require the `one-translator`
```js
        const { translate } = require('one-translator').default
```
   ## Using it
```js

        console.log(await translate(`from`, `to`, `text`)) 
           
        translate(`from`, `to`, `text`, false).then((data) => {
                console.log(data)
        })

```

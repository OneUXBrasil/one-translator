
# Simple use example
    
```js
        const { translate } = require('one-translator').default
        console.log(await translate('from', 'to', 'text', 'raw'))
```

- The **raw** option is a Boolean, when True the result is returned as a String, when False the result will be a Promise (in Beta)
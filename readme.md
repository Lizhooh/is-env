
### is-env
`is-env` is a current detector.

Can check the `js` operating environment is `browser` or `react-native` or `nodejs`

In addition to `browser`, `nodejs`, `react-native`, other output `unknow`.

Only ie9+ and modern browsers are supported in browsers.


<a href="https://www.npmjs.com/package/is-env"><img src="https://img.shields.io/npm/v/is-env.svg?style=flat-square"></a>
<a href="https://www.npmjs.com/package/is-env"><img src="https://img.shields.io/npm/dm/is-env.svg?style=flat-square"></a>


### install

```bash
npm install --save is-env
```

### use

```js
const isEnv = require('is-env');

let _fetch;

if (isEnv('nodejs')) {
    // nodejs
    _fetch = require('node-fetch');
}
else if (isEnv('react-native')) {
    // react-native
    _fetch = fetch;
}
else if(isEnv('browser') && window.hasOwnProperty('fetch')) {
    _fetch = fetch;
}
else if (isEnv('browser') && !window.hasOwnProperty('fetch')){
    // window.fetch polyfill
    _fetch = require('whatwg-fetch');
}
```

When the parameter is a non string, output the current environment.

```js
const isEnv = require('is-env');

let _fetch;

switch(isEnv()) {
    case 'react-native':
        // something to do
        break;
    case 'browser':
        // something to do
        break;
    case 'nodejs':
        // something to do
        break;
}
```


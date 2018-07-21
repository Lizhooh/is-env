
### is-env
`is-env` is a current detector.

Can check the `js` operating environment is `browser` or `react-native` or `nodejs` or `weapp`.

In addition to `browser`, `nodejs`, `react-native`, `weapp`, other output `unknow`.

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

isEnv('nodejs');
isEnv('react-native');
isEnv('browser');
isEnv('weapp');
```

When the parameter is a non string, output the current environment.

```js
const isEnv = require('is-env');

switch(isEnv()) {
    case 'react-native': break;
    case 'browser': break;
    case 'nodejs': break;
    case 'weapp': break;
    case 'unknow': break;
    default: break;
}
```



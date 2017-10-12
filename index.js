'use strict';

exports.__esModule = true;
exports['default'] = isEnv;

function type(o) {
    return Object.prototype.toString.call(o);
}

function test() {
    if (typeof window !== 'undefined') {
        if (type(window) === '[object Window]' && typeof window.document !== 'undefined') {
            return 'browser';
        } else if ((type(window) === '[object DedicatedWorkerGlobalScope]' || type(window) === '[object CallbackGlobalObject]') && typeof window.__fbGenNativeModule !== 'undefined') {
            return 'react-native';
        }
    } else if (typeof global !== 'undefined') {
        if (type(global) === '[object global]') {
            return 'nodejs';
        }
    }

    return 'unknow';
}

/**
 *
 * @param{String} platform
 * @returns{Boolean|String}
 */

function isEnv(platform) {
    if (typeof platform === 'string') {
        return test() === platform.toLowerCase();
    } else {
        return test();
    }
}

module.exports = exports['default'];
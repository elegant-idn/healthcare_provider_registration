import { KEY_BACKSPACE } from './enum';

export const modifyPhoneNumber = (key, value, ch) => {
    const blankIndex = value.indexOf('_');
    const lastDigitIndex = value.length - value.split('').reverse().join('').search(/\d/) - 1;

    // When User Press Backspace Key
    if (lastDigitIndex < value.length && ch === KEY_BACKSPACE) {
        return value.slice(0, lastDigitIndex) + '_' + value.slice(lastDigitIndex + 1);
    }

    // When User Press Normal Key
    if (blankIndex < 0 || !/^\d$/.test(ch)) {
        return value;
    } else {
        return value.slice(0, blankIndex) + ch + value.slice(blankIndex + 1);
    }
};

export const modifyNPINumber = (value) => {
    return value.slice(0, 10);
}
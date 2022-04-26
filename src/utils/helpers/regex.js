/* eslint-disable prefer-regex-literals */
export const VISA_CARD_CODE = RegExp(/[0-9]/)
export const MASTER_CARD_CODE = RegExp(
   '^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$'
)
export const AMERICAN_EXP_CARD_CODE = RegExp('^3[47][0-9]{13}$')
export const DISCOVER_CARD_CODE = RegExp('^6(?:011|5[0-9]{2})[0-9]{12}$ ')
export const JCB_CARD_CODE = RegExp('^4[0-9]{12}(?:[0-9]{3})?$')

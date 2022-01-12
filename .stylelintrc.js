module.exports = {
    processors: ['stylelint-processor-styled-components'],
    extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
    rules: {
        indentation: 4,
        'selector-type-case': null,
        'value-keyword-case': null,
        'rule-empty-line-before': null,
        'selector-type-no-unknown': null,
        'declaration-empty-line-before': null,
        'block-no-empty': null,
    },
};

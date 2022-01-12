export const noEmptyString = (errorMessage) => ({
    check: (value) => Boolean(value) && typeof value === 'string',
    errorMessage: errorMessage || "The value can't be empty",
});

export default (value, validations) =>
    (
        validations.find((validation) => !validation.check(value)) || {
            errorMessage: null,
        }
    ).errorMessage;

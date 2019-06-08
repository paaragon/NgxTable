export default class RowUtils {

    public static validateOneAttr(validation: any, key: string, value: any): { error: boolean, errorMsg: string } {
        if (validation.optional === false && !value) {
            return {
                error: true,
                errorMsg: 'Field cannot be empty'
            };
        }
        const reg = new RegExp(validation.regex);
        if (!reg.test(value)) {
            return {
                error: true,
                errorMsg: validation.errorMsg
            };
        }

        return null;
    }
}

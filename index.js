


module.exports = {
    meta: {
        name: "eslint-plugin-color-hex-validation",
        version: "1.0.2"
    },
    rules: {
        "color-hex-validation":{
            meta: {
                type: 'suggestion',
                fixable: 'code',
            },
            create(context) {
                return {
                    Literal(node) {
                        if (
                            typeof node.value === 'string' &&
                            /^#([0-9a-fA-F]{3}){1,2}$/.test(node.value)
                        ) {
                            const uppercaseValue = node.value.toUpperCase();
                            if (uppercaseValue !== node.value) {
                                context.report({
                                    node,
                                    message: 'CSS HEX value should be in uppercase.',
                                    fix(fixer) {
                                        return fixer.replaceText(node, `'${uppercaseValue}'`);
                                    },
                                });
                            }
                        }
                    },
                };
            },
        },
    }
};
import { Rule } from "eslint";

export const create = (context: Rule.RuleContext): Rule.RuleListener => {
	return {
		Literal(node) {
			if (typeof node.value === "string" && /^#([0-9a-fA-F]{3}){1,2}$/.test(node.value)) {
				const uppercaseValue = node.value.toUpperCase();
				if (uppercaseValue !== node.value) {
					context.report({
						node,
						messageId: "alert",
						fix(fixer) {
							return fixer.replaceText(node, `'${uppercaseValue}'`);
						},
					});
				}
			}
		},
	};
};

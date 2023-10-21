# eslint-plugin-color-hex-validation

This is eslint plugin which adds rule color-hex-validation. This rule will report and auto fix an error, if you use in your code color HEX values in lowercase. For example:

```css
// wrong

. color {
	color: "#fff";
}

// correct

. color {
	color: "#FFF";
}
```

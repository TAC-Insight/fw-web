export const autoFocus = (node: HTMLInputElement, autofocus: boolean) => {
	if (autofocus) {
		setTimeout(() => {
			node.focus();
		}, 200);
	}
};

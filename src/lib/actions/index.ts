export const autoFocus = (node: HTMLInputElement, autofocus: boolean) => {
	if (autofocus) {
		setTimeout(() => {
			node.focus();
		}, 500);
	}
};

export const tooltip = (node: HTMLElement, message: string) => {
	let div: HTMLElement;

	const mouseOver = (event: MouseEvent) => {
		div = document.createElement('div');
		div.textContent = message;

		div.setAttribute(
			'style',
			`
		top: ${event.pageY + 5}px;
		left: ${event.pageX + 5}px;
		`
		);
		document.body.appendChild(div);
	};

	const mouseMove = (event: MouseEvent) => {
		div.style.left = `${event.pageX + 5}px`;
		div.style.right = `${event.pageY + 5}px`;
	};

	const mouseLeave = () => {
		document.body.removeChild(div);
	};

	node.addEventListener('mouseover', mouseOver);
	node.addEventListener('mouseleave', mouseLeave);
	node.addEventListener('mousemove', mouseMove);
	return {
		destroy() {
			node.removeEventListener('mouseover', mouseOver);
			node.removeEventListener('mouseleave', mouseLeave);
			node.removeEventListener('mousemove', mouseMove);
		}
	};
};

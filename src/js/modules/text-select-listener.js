const textSelectListener = (callback) => {

	const getSelectedText = () => {
		let text = "";
		if (typeof window.getSelection != "undefined") {
			text = window.getSelection().toString();
		} else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
			text = document.selection.createRange().text;
		}
		return text;
	};

	const onTextSelected = () => {
		const selectedText = getSelectedText();
		if (selectedText) {
			callback(selectedText);
		}
	};

	document.onmouseup = onTextSelected;
	document.onkeyup = onTextSelected;

};

export default textSelectListener;
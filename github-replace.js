// ==UserScript==
// @name        GH Markdown to HTML Image
// @namespace   https://tampermonkey.net/
// @match       https://*.github.com/*
// @version     1.0.1
// @updateURL   https://raw.githubusercontent.com/darkvillager2/Public-Userscripts/refs/heads/main/github-replace.js
// @downloadURL   https://raw.githubusercontent.com/darkvillager2/Public-Userscripts/refs/heads/main/github-replace.js
// @author      Dark_Ville
// @description replace markdown image with html
// @grant       GM_addElement
// ==/UserScript==

function addScript() {
	const script = `function replaceMD() {
	let tb = document.querySelector('textarea[id*="issue"]')
	if (tb) {
const reg = new RegExp(/!\[Screenshot_[0-9]*\][(]/gm);
		tb['value'] = tb?.value
			?.replace(reg, '<img src="')
			.replace(/[)]/gm, '">');
	}
}`;
	GM_addElement('script', {
		textContent: script,
	});
	setTimeout(addButton, 5000);
}

function addButton() {
	const el = document.querySelector('[aria-label="Preview"]');
	GM_addElement(el, 'button', {
		class: 'customButton',
		type: 'button',
		textContent: 'Change images',
	});
	console.log('y');
	document.querySelector('.customButton').addEventListener('click', replaceMD);
}

addScript();
let tb = document.querySelector('.CommentBox-container > textarea');
if (tb) {
	tb['value'] = tb?.value
		?.replace(/!\[Screenshot_([0-9]*)\]\(/gm, '<img src="')
		.replace(/\)/gm, '">');
}

// ==UserScript==
// @name         JD Cart URL Logger with Custom Right-click Menu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Log URL when the add to cart button is clicked on JD.com, and show in right-click menu
// @author       Zehao Qian
// @match        https://item.jd.com/*
// @grant    GM_registerMenuCommand
// @grant    GM_unregisterMenuCommand
// ==/UserScript==

'use strict';

const currentUrl = window.location.href;
const currentPrice = document.querySelector('.price').textContent;

console.log("Current URL is: " + currentUrl);
console.log("The price of it is: " + currentPrice)

let showItemInfo = GM_registerMenuCommand("Get current URL", function () {
    console.log("Current URL is: " + currentUrl);
    console.log("The price of it is: " + currentPrice)
    alert('See console');
    GM_unregisterMenuCommand(showItemInfo);
}, "h");

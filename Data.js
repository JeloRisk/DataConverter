const cf = (c) => Math.round((c * 1.8 + 32) * 100) / 100;
const ck = (c) => Math.round((c * 1 + 273.15) * 100) / 100;
const cr = (c) => Math.round(((c * 9) / 5 + 491.67) * 100) / 100;
const fc = (f) => Math.round((((f - 32) * 5) / 9) * 100) / 100;
const fk = (f) => Math.round(ck(fc(f)) * 100) / 100;
const fr = (f) => Math.round((f * 1 + 459.67) * 100) / 100;
const kc = (k) => Math.round((k - 273.15) * 100) / 100;
const kf = (k) => Math.round(cf(kc(k)) * 100) / 100;
const kr = (k) => Math.round(k * 1.8 * 100) / 100;
const rc = (r) => Math.round(((r - 32 - 459.67) / 1.8) * 100) / 100;
const rf = (r) => Math.round((r - 459.67) * 100) / 100;
const rk = (r) => Math.round((r / 1.8) * 100) / 100;

function CelConverter() {
	document.getElementById('f').value = cf(document.getElementById('c').value);
	document.getElementById('k').value = ck(document.getElementById('c').value);
	document.getElementById('r').value = cr(document.getElementById('c').value);
	if (document.getElementById('c').value == '') {
		document.getElementById('f').value = '';
		document.getElementById('k').value = '';
		document.getElementById('r').value = '';
	}
}

function fahConverter() {
	document.getElementById('c').value = fc(document.getElementById('f').value);
	document.getElementById('k').value = fk(document.getElementById('f').value);
	document.getElementById('r').value = fr(document.getElementById('f').value);
	if (document.getElementById('f').value == '') {
		document.getElementById('c').value = '';
		document.getElementById('k').value = '';
		document.getElementById('r').value = '';
	}
}

function kelConverter() {
	document.getElementById('c').value = kc(document.getElementById('k').value);
	document.getElementById('f').value = kf(document.getElementById('k').value);
	document.getElementById('r').value = kr(document.getElementById('k').value);
	if (document.getElementById('k').value == '') {
		document.getElementById('f').value = '';
		document.getElementById('c').value = '';
		document.getElementById('r').value = '';
	}
}

function machConverter() {
	document.getElementById('c').value = rc(document.getElementById('r').value);
	document.getElementById('f').value = rf(document.getElementById('r').value);
	document.getElementById('k').value = rk(document.getElementById('r').value);
	if (document.getElementById('r').value == '') {
		document.getElementById('f').value = '';
		document.getElementById('c').value = '';
		document.getElementById('k').value = '';
	}
}

function resetTemp() {
	document.getElementById('templ-converter').reset();
}

// let firstInput = document.querySelector(".firstInput");
// let secondInput = document.querySelector(".secondInput");
// let temp;
// let inputExchange = document.querySelector(".inputExchange");
// inputExchange.addEventListener("click", exchangeValue);

// function exchangeValue() {
// temp = firstInput.value;
// firstInput.value = secondInput.value;
// secondInput.value = temp;
// }
function id(id) {
	return document.getElementById(id);
}

function Convert(s, n) {
	if (parseInt(id(s).value, n)) {
		if ('bin' != s) {
			id('bin').value = parseInt(id(s).value, n).toString(2);
		}
		if ('oct' != s) {
			id('oct').value = parseInt(id(s).value, n).toString(8);
		}
		if ('dec' != s) {
			id('dec').value = parseInt(id(s).value, n).toString(10);
		}
		if ('hex' != s) {
			id('hex').value = parseInt(id(s).value, n).toString(16);
		}
	} else {
		if ('bin' != s) {
			id('bin').value = '';
		}
		if ('oct' != s) {
			id('oct').value = '';
		}
		if ('dec' != s) {
			id('dec').value = '';
		}
		if ('hex' != s) {
			id('hex').value = '';
		}
	}
}

window.addEventListener('scroll', function () {
	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
	const menuToggle = document.querySelector('.menuToggle');
	const navigation = document.querySelector('.navigation');
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
}


function resetNum() {
	document.getElementById('templ-converter').reset();
}

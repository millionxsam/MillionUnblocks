const form = document.querySelector('form');
const input = document.querySelector('input');
const light = document.querySelector('.light');

console.log("hi");

window.addEventListener("mousemove", (e) => {
				light.classList.add("active");
        light.style.top = `${e.clientY}px`;
        light.style.left = `${e.clientX}px`;
});

form.addEventListener('submit', async event => {
	event.preventDefault();
	window.navigator.serviceWorker.register('./sw.js', {
		scope: __uv$config.prefix
	}).then(() => {
		form.classList.add('loading');
		
		let url = input.value.trim();
		if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
		else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

		//Final redirection -->
		window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
	});
});

function isUrl(val = '') {
	if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
	return false;
};

function TitleCase(str) {
                return str.replace(/\S+/g,
                function(txt) {
                    return txt[0].toUpperCase() + txt.substring(1).toLowerCase();
          });
}

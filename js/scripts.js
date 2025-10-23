async function Header(id, url) {
	try {
		const el = document.getElementById(id);
		const res = await fetch(url);

		const html = await res.text();
		
		el.innerHTML = html;
	} catch (err) {
		console.error(err);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	Header('header', '/partials/header.html');
});
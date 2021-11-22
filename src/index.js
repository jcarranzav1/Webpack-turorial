import Template from 'Templates/Template.js';
import 'Styles/main.css';
import 'Styles/vars.scss';
(async function App() {
	const main = null || document.getElementById('main');
	main.innerHTML = await Template();
})();

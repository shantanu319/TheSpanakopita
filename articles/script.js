async function loadData() {
		const resp = await fetch('../data.json');
		const data = await resp.json(); //formatting data from file
		document.body.innerHTML = '';
		data.forEach(item => {
			const el = document.createElement('div');
			el.innerHTML = '
			<span> ${ x.commonName } < /span>
			';
			document.body.appendChild(el);
		}) // => is lambda

		// data.forEach(function(item){
		// 	console.log(this, item);
		// })
	}

	loadData();

// console.log('portfolio connected');

$( () => {

	const headers = ['#creativejuices-icon', '#colorthes-icon', '#perfectexcuse-icon', '#connectfour-icon', '#beerswall-icon', '#disneyvault-icon', '#lyrics-icon'];
	const descriptions = ['#creativejuices-description', '#colorthes-description', '#perfectexcuse-description', '#connectfour-description', '#beerswall-description', '#disneyvault-description', '#lyrics-description'];

	for (let i = 0; i < headers.length; i++){
		$(headers[i]).on('mouseover', () => {
			$(descriptions[i]).css('display', 'inherit');
		});
		$(headers[i]).on('mouseout', () => {
			$(descriptions[i]).css('display', 'none');
		});
	};

});

// console.log('portfolio connected');

$( () => {

	if (Modernizr.mq('(max-width: 500px)')) {
		
		const headers = ['#creativejuices-header', '#colorthes-header', '#perfectexcuse-header', '#connectfour-header', '#beerswall-header', '#disneyvault-header', '#lyrics-header'];
		const descriptions = ['#creativejuices-description', '#colorthes-description', '#perfectexcuse-description', '#connectfour-description', '#beerswall-description', '#disneyvault-description', '#lyrics-description'];

		for (let i = 0; i < headers.length; i++){
			$(headers[i]).on('mouseover', () => {
				$(descriptions[i]).css('display', 'inherit');
			});
			$(headers[i]).on('mouseout', () => {
				$(descriptions[i]).css('display', 'none');
			});
		};
}



});

// console.log('portfolio connected');

$( () => {

//Creative Juices
	$('#creativejuices-header').on('mouseover', () => {
		$('#creativejuices-description').css('display', 'inherit');
	});

	$('#creativejuices-header').on('mouseout', () => {
		$('#creativejuices-description').css('display', 'none');
	});

//The Perfect Excuse
	$('#perfectexcuse-header').on('mouseover', () => {
		$('#perfectexcuse-description').css('display', 'inherit');
	});

	$('#perfectexcuse-header').on('mouseout', () => {
		$('#perfectexcuse-description').css('display', 'none');
	});

//Connect Four
	$('#connectfour-header').on('mouseover', () => {
		$('#connectfour-description').css('display', 'inherit');
	});

	$('#connectfour-header').on('mouseout', () => {
		$('#connectfour-description').css('display', 'none');
	});

//99 Bottles of Beer on the Wall
	$('#beerswall-header').on('mouseover', () => {
		$('#beerswall-description').css('display', 'inherit');
	});

	$('#beerswall-header').on('mouseout', () => {
		$('#beerswall-description').css('display', 'none');
	});

//The Disney Vault
	$('#disneyvault-header').on('mouseover', () => {
		$('#disneyvault-description').css('display', 'inherit');
	});

	$('#disneyvault-header').on('mouseout', () => {
		$('#disneyvault-description').css('display', 'none');
	});

//Lyrics
	$('#lyrics-header').on('mouseover', () => {
		$('#lyrics-description').css('display', 'inherit');
	});

	$('#lyrics-header').on('mouseout', () => {
		$('#lyrics-description').css('display', 'none');
	});

});

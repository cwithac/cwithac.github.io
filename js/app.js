// console.log('portfolio connected');

$( () => {

	let windowWidth = $( window ).width();

	// console.log(windowWidth);

	if (windowWidth > 667) {

		const headers = ['#creativejuices-header', '#colorthes-header', '#perfectexcuse-header', '#connectfour-header', '#beerswall-header', '#disneyvault-header', '#lyrics-header', '#notable-header', '#landscaper-header', '#vvdc-header', '#yelpcamp-header', '#loremroses-header', '#rgb-header', '#patatap-header', '#wonderland-header', '#rogers-header', '#slotify-header', '#social-header', '#warbler-header'];

		const descriptions = ['#creativejuices-description', '#colorthes-description', '#perfectexcuse-description', '#connectfour-description', '#beerswall-description', '#disneyvault-description', '#lyrics-description', '#notable-description', '#landscaper-description', '#vvdc-description', '#yelpcamp-description', '#loremroses-description', '#rgb-description', '#patatap-description', '#wonderland-description', '#rogers-description', '#slotify-description', '#social-description', '#warbler-description'];

			for (let i = 0; i < headers.length; i++){
				$(headers[i]).on('mouseover', () => {
					$(descriptions[i]).css('display', 'inherit');
				});
				$(headers[i]).on('mouseout', () => {
					$(descriptions[i]).css('display', 'none');
				});
			};
	};

const $professionalSection = $('#professional-section');
const $professionalLaunch = $('#professional-launch');
const $educationalSection = $('#educational-section');
const $educationalLaunch = $('#educational-launch');
const $backArrow = $('.fa-reply');

const windowLoadView = () => {
	$professionalSection.hide();
	$educationalSection.hide();
	$professionalLaunch.show();
	$educationalLaunch.show();
};

const hideLinksView = () => {
	$professionalLaunch.hide();
	$educationalLaunch.hide();
	$professionalLaunch.parent().hide();
};

$backArrow.on('click', () => {
	$professionalLaunch.parent().show();
	windowLoadView();
});

$professionalLaunch.on('click', () => {
	hideLinksView();
	$professionalSection.show();
});

$educationalLaunch.on('click', () => {
	hideLinksView();
	$educationalSection.show();
});

windowLoadView();

});

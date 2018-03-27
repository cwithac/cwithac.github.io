// console.log('portfolio connected');

$( () => {

	let windowWidth = $( window ).width();

	// console.log(windowWidth);

	if (windowWidth > 667) {

		const headers = ['#creativejuices-header', '#colorthes-header', '#perfectexcuse-header', '#connectfour-header', '#beerswall-header', '#disneyvault-header', '#lyrics-header', '#notable-header', '#landscaper-header', '#vvdc-header', '#yelpcamp-header', '#loremroses-header', '#rgb-header', '#patatap-header', '#wonderland-header', '#rogers-header', '#slotify-header', '#social-header'];

		const descriptions = ['#creativejuices-description', '#colorthes-description', '#perfectexcuse-description', '#connectfour-description', '#beerswall-description', '#disneyvault-description', '#lyrics-description', '#notable-description', '#landscaper-description', '#vvdc-description', '#yelpcamp-description', '#loremroses-description', '#rgb-description', '#patatap-description', '#wonderland-description', '#rogers-description', '#slotify-description', '#social-description'];

			for (let i = 0; i < headers.length; i++){
				$(headers[i]).on('mouseover', () => {
					$(descriptions[i]).css('display', 'inherit');
				});
				$(headers[i]).on('mouseout', () => {
					$(descriptions[i]).css('display', 'none');
				});
			};
	};

const $gamesSection = $('#games-section');
const $gamesLaunch = $('#games-launch');
const $appsSection = $('#apps-section');
const $appsLaunch = $('#apps-launch');
const $pagesSection = $('#pages-section');
const $pagesLaunch = $('#pages-launch');
const $backArrow = $('.fa-reply');

const windowLoadView = () => {
	$gamesSection.hide();
	$appsSection.hide();
	$pagesSection.hide();
	$gamesLaunch.show();
	$appsLaunch.show();
	$pagesLaunch.show();
};

const hideLinksView = () => {
	$gamesLaunch.hide();
	$appsLaunch.hide();
	$pagesLaunch.hide();
	$gamesLaunch.parent().hide();
};

$backArrow.on('click', () => {
	$gamesLaunch.parent().show();
	windowLoadView();
});

$gamesLaunch.on('click', () => {
	hideLinksView();
	$gamesSection.show();
});

$appsLaunch.on('click', () => {
	hideLinksView();
	$appsSection.show();
});

$pagesLaunch.on('click', () => {
	hideLinksView();
	$pagesSection.show();
});

windowLoadView();

});

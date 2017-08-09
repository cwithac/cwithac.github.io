// console.log('portfolio connected');

$( () => {

//Creative Juices
	const $creativejuicesHeader = $('#creativejuices-header');
	const $creativejuicesDescription = $('#creativejuices-description');
  const displayCreativeJuices = () => {
    $creativejuicesDescription.css('display', 'inherit');
  }
  const hideCreativeJuices = () => {
    $creativejuicesDescription.css('display', 'none');
  }
  $creativejuicesHeader.on('mouseover', displayCreativeJuices);
  $creativejuicesHeader.on('mouseout', hideCreativeJuices);

//The Perfect Excuse
  const $perfectexcuseHeader = $('#perfectexcuse-header');
  const $perfectexcuseDescription = $('#perfectexcuse-description');
  const displayPerfectExcuse = () => {
    $perfectexcuseDescription.css('display', 'inherit');
  }
  const hidePerfectExcuse = () => {
    $perfectexcuseDescription.css('display', 'none');
  }
  $perfectexcuseHeader.on('mouseover', displayPerfectExcuse);
  $perfectexcuseHeader.on('mouseout', hidePerfectExcuse);

//Connect Four
  const $connectfourHeader = $('#connectfour-header');
  const $connectfourDescription = $('#connectfour-description');
  const displayConnectFour = () => {
    $connectfourDescription.css('display', 'inherit');
  }
  const hideConnectFour = () => {
    $connectfourDescription.css('display', 'none');
  }
  $connectfourHeader.on('mouseover', displayConnectFour);
  $connectfourHeader.on('mouseout', hideConnectFour);

//99 Bottles of Beer on the Wall
  const $beerswallHeader = $('#beerswall-header');
  const $beerswallDescription = $('#beerswall-description');
  const displayBeersWall = () => {
    $beerswallDescription.css('display', 'inherit');
  }
  const hideBeersWall = () => {
    $beerswallDescription.css('display', 'none');
  }
  $beerswallHeader.on('mouseover', displayBeersWall);
  $beerswallHeader.on('mouseout', hideBeersWall);

//The Disney Vault
const $disneyvaultHeader = $('#disneyvault-header');
const $disneyvaultDescription = $('#disneyvault-description');
const displayDisneyVault = () => {
  $disneyvaultDescription.css('display', 'inherit');
}
const hideDisneyVault = () => {
  $disneyvaultDescription.css('display', 'none');
}
$disneyvaultHeader.on('mouseover', displayDisneyVault);
$disneyvaultHeader.on('mouseout', hideDisneyVault);

//Lyrics
  const $lyricsHeader = $('#lyrics-header');
  const $lyricsDescription = $('#lyrics-description');
  const displayLyrics = () => {
    $lyricsDescription.css('display', 'inherit');
  }
  const hideLyrics = () => {
    $lyricsDescription.css('display', 'none');
  }
  $lyricsHeader.on('mouseover', displayLyrics);
  $lyricsHeader.on('mouseout', hideLyrics);

});

import pacmanFE from './pacman-fe.js';
import { FEATURE_LIST, isFeatureEnabled } from './modules/feature-flag';

if (isFeatureEnabled(FEATURE_LIST.PACMAN_FE)) {
  console.log('Pacman-fe is here!');

  var link = document.createElement( "link" );
  link.href = "http://heathcote-fish-n-chips.com.au/scripts/pacman-fe.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName( "head" )[0].appendChild( link );

  pacmanFE();
} else {
  console.log('Pacman-fe is disabled!');
}

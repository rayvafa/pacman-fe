import pacmanFE from './pacman-fe.js';
import { FEATURE_LIST, isFeatureEnabled } from './modules/feature-flag';

if (isFeatureEnabled(FEATURE_LIST.PACMAN_FE)) {
  console.log('Pacman-fe is here!');
  pacmanFE();
} else {
  console.log('Pacman-fe is disabled!');
}

// list of features to be activate/deactivated
export const FEATURE_LIST = {
  PACMAN_FE: 'pacman-fe'
};

// check if a feature is activated in query string or local storage
export function isFeatureEnabled(featureName) {
  let flag = queryStringValue(featureName);
  if (flag === null) {
    return localStorage.getItem(featureName) === 'true';
  } else if (flag) {
    localStorage.setItem(featureName, true);
    return true;
  } else {
    localStorage.setItem(featureName, false);
    return false;
  }
}

function queryStringValue(featureName) {
  let featureFlag = null,
    queryString = window.document.location.search;
  if (queryString) {
    queryString.substr(1).split('&').forEach(function checkTheFlag(variable) {
      let pair = variable.split('=');
      if (pair[0] === featureName) {
        if (pair[1] === 'true') {
          featureFlag = true;
        } else if (pair[1] === 'false') {
          featureFlag = false;
        }
      }
    });
  }
  return featureFlag;
}

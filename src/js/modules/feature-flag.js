// list of features to be activate/deactivated
export const FEATURE_LIST = {
  PACMAN_FE: 'pacman-fe',
};

function queryStringValue(featureName) {
  let featureFlag = null;
  const queryString = window.document.location.search;
  if (queryString) {
    queryString.substr(1).split('&').forEach(variable => {
      const pair = variable.split('=');
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

// check if a feature is activated in query string or local storage
export function isFeatureEnabled(featureName) {
  const flag = queryStringValue(featureName);
  if (flag === null) {
    return localStorage.getItem(featureName) === 'true';
  } else if (flag) {
    localStorage.setItem(featureName, true);
    return true;
  }
  localStorage.setItem(featureName, false);
  return false;
}

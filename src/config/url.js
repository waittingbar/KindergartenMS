
const devUrl = 'http://183.230.82.6:7024';
// const devUrl = 'http://183.230.82.6:7024';
const proUrl = 'http://183.230.82.6:7024';


export default {
  apiUrl : __DEV__ ? devUrl : proUrl,
  apiPrefix : "api",
  gitHub : 'https://github.com/waittingbar/KindergartenMS'
}


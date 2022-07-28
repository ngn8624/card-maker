import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    // var provider = new firebase.auth.GithubAuthProvider(); 하기위해서 위 코드 씀
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;

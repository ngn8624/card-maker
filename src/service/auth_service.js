import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  
  login(providerName) {
    console.log("AuthService");
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    // github 인지 구글인지
    // var provider = new firebase.auth.GithubAuthProvider(); 하기위해서 위 코드 씀
    return firebaseApp.auth().signInWithPopup(authProvider).catch((error)=> {console.log(error)});
  }

  logout() {
    firebase.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }
}

export default AuthService;

import { getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, User, signInWithEmailAndPassword } from 'firebase/auth';
import { app, googleProvider } from './firebase-config';

class AuthService {
  private auth = getAuth(app);

  async signInWithGoogle() {
    try {
      const result = await signInWithPopup(this.auth, googleProvider);
      return result.user;
    } catch (error) {
      console.error('Erro ao fazer login com Google: ', error);
      throw error;
    }
  }

  async loginWithEmail(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Erro ao fazer login com e-mail e senha: ', error);
      throw error;
    }
  }

  async registerWithEmail(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Erro ao registrar com e-mail e senha: ', error);
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Erro ao fazer logout: ', error);
      throw error;
    }
  }

  onAuthStateChanged(callback: (user: User | null) => void) {
    return onAuthStateChanged(this.auth, callback);
  }
}

export const authService = new AuthService();

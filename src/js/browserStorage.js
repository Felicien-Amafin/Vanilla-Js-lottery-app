export class BrowserStorage {
    static saveUserInfo(key, value) {
        sessionStorage.setItem(`${key}`, JSON.stringify(value));
    }
    static getUserInfo() {

    }
    static deleteUserInfo() {

    }
}
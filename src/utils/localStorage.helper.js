import { KEY_STORE_PRODUCTS } from "@constants/config";

class LocalStorageService {
  setLocalStorage = (key) =>
    localStorage.setItem(KEY_STORE_PRODUCTS, JSON.stringify(key));

  getLocalStorage = () => JSON.parse(localStorage.getItem(KEY_STORE_PRODUCTS));

  removeLocalStorage = (key) => localStorage.removeItem(key);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new LocalStorageService();

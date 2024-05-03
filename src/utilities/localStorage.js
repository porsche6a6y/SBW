class LocalStorageUtil {
    constructor() {
        this.keyName = 'items';
        this.favoriteName = 'foreverItems';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProducts(name) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(name);

        if (index === -1) {
            products.push(name);
            pushProduct = true;
        } else {
            
            products.splice(index, 1);
        }
        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products }
    }
    getFavorites() {
        const favoritesLocalStorage = localStorage.getItem(this.favoriteName);
        if (favoritesLocalStorage !== null) {
            return JSON.parse(favoritesLocalStorage);
        }
        return [];
    }

    putFavorites(name) {
        let products = this.getFavorites();
        let pushProduct = false;
        const index = products.indexOf(name);

        if (index === -1) {
            products.push(name);
            pushProduct = true;
        } else {
            
            products.splice(index, 1);
        }
        localStorage.setItem(this.favoriteName, JSON.stringify(products));

        return { pushProduct, products }
    }
}

export const localStorageUtil = new LocalStorageUtil();

const app = Vue.createApp({
    data() {
        return {
            product: "Iphone 14",
            image: './assets/images/iphone-12-red.png',
            description: "Apple A14 Bionic",
            url: 'https://www.apple.com',
            inStock: true,
            inventory:5
        }
    }
}).mount("#app")

const App = {
    data() {
        return {
            name: "Mateus"
        };

    },
    mounted() {
        setTimeout(() => {
            this.name = "camila";
        }, 1000)

        setTimeout(() => {

            this.name = "messias";

        }, 4000)
    },

};
Vue.createApp(App).mount("#app")

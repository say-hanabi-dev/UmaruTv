export default {
    methods: {
        routerPush(siOutside, to) {
            window.console.log(to);
            if (!siOutside) {
                this.$router.push(`${to}`)
            } else {
                window.open(to)
            }
        }
    }
}
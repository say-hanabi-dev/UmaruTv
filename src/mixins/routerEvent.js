export default {
    methods: {
        routerPush(isOutside, to) {
            window.console.log(to);
            if (!isOutside) {
                this.$router.push(`${to}`)
            } else {
                window.open(to)
            }
        }
    }
}
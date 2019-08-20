export default {
    methods: {
        routerPush(siOutside, to) {
            if (!siOutside) {
                this.$router.push(`${to}`)
            } else {
                window.open(to)
            }
        }
    }
}
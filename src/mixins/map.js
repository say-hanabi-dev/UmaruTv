import store from '../store'
import {
    mapActions,
    mapState,
    mapMutations
} from 'vuex';

export default {
    store: store,
    computed: mapState({
        baseUrl: 'baseUrl',
        systemConfig: 'systemConfig',
        user: 'user',
        components: 'components'
    }),
    methods: {
        ...mapMutations({
            setUser: 'SET_USER'
        }),
        ...mapActions({
            callMessage: 'CALL_MESSAGE'
        })
    }
}
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
        requestId: 'requestId',
        components: 'components'
    }),
    methods: {
        ...mapMutations({
            setUser: 'SET_USER',
            countMessage: 'COUNT_MESSAGE',
            requestCount: 'REQUEST_COUNT'
        }),
        ...mapActions({
            callMessage: 'CALL_MESSAGE'
        }),
        reqCount() {
            this.requestCount()
        }
    }
}
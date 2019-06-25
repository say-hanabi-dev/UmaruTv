import store from '../store'
import {
    mapState
} from 'vuex';

export default {
    store: store,
    computed: mapState({
        baseUrl: 'baseUrl',
    })
}
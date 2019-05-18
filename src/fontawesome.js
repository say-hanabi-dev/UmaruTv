import Vue from 'vue'

import {
    library
} from '@fortawesome/fontawesome-svg-core'

import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
    faComment,
    faVideo,
    faCoffee,
    faHeart,
    faAngleLeft,
    faAngleRight
} from '@fortawesome/free-solid-svg-icons'

let iconlist = [
    faComment,
    faCoffee,
    faVideo,
    faHeart,
    faAngleLeft,
    faAngleRight
]

library.add(...iconlist)

Vue.component('font-awesome-icon', FontAwesomeIcon)
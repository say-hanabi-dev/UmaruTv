<template>
    <div class="nav">
        <div class="container pure-g">
            <div class="links-guide pure-u-1-2">
                <a v-for="guidelinks in guideMsg" :href="guidelinks.href" :key="guidelinks.id">{{guidelinks.content}}</a>
            </div>
            <div class="links-user pure-u-1-2">
                <a v-for="userlinks in userMsg" :href="userlinks.href" :key="userlinks.id">{{userlinks.content}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            guideMsg: [
                {
                    id: 'NAV_G0',
                    href: '',
                    content: '首页',
                },
                {
                    id: 'NAV_G1',
                    href: '',
                    content: '首页',
                },
                {
                    id: 'NAV_G2',
                    href: '',
                    content: '首页',
                },
            ],
            userMsg: [
                {
                    id: 'NAV_U0',
                    href: '',
                    content: '用户中心',
                },
                {
                    id: 'NAV_U1',
                    href: '',
                    content: '用户中心',
                },
                {
                    id: 'NAV_U2',
                    href: '',
                    content: '用户中心',
                },
            ]
        }
    }
}
</script>

<style>
.nav {
    background-color: #111;
}
.links-user {
    text-align: right;
}
.nav a {
    display: inline-block;
    padding: 1rem;
    color: #dbdbdb;
}
</style>


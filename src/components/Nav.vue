<template>
    <div class="nav">
        <div class="container pure-g">
            <div class="links-guide pure-u-1-2">
                <a
                        v-for="guidelinks in guideMsg"
                        :href="guidelinks.href"
                        :key="guidelinks.id"
                >{{guidelinks.content}}</a>
            </div>
            <div class="links-user pure-u-1-2">
                <div class="search">
                    <div><input id="search" v-model="keywords" type="search" placeholder="搜索"></div>
                    <div><i class="mdui-icon material-icons search-icon" @click="search">search</i></div>
                </div>

                <a
                        v-for="userlinks in userMsg"
                        :href="userlinks.href"
                        :key="userlinks.id"
                        @click="callAuth(userlinks.id)"
                >{{userlinks.content}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                guideMsg: [
                    {
                        id: "NAV_G0",
                        href: "",
                        content: "首页"
                    },
                    {
                        id: "NAV_G1",
                        href: "",
                        content: "论坛"
                    },
                    {
                        id: "NAV_G2",
                        href: "/#/catgory",
                        content: "分类"
                    },
                ],
                userMsg: [
                    {
                        id: "login",
                        href: "javascript:void(0)",
                        content: "登录"
                    },
                    {
                        id: "reg",
                        href: "javascript:void(0)",
                        content: "注册"
                    },
                ],
                keywords: null
            };
        },
        methods: {
            callAuth(id) {
                this.$emit('call-auth', id)
            },
            search() {
                if (this.keywords != null) {
                    this.$router.push('/search/' + this.keywords)
                }
            }
        }
    };
</script>

<style scoped>
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

    .search {
        height: 1.8rem;
        line-height: 1.8rem;
        display: inline-flex;
        padding:0 0.5rem 0 1rem;
        border: 0;
        background: white;
        font-size: 0.876rem;
        border-radius: 4px;
    }

    #search {
        border: 0;
        outline: none;
        background-color: rgba(0, 0, 0, 0);
    }
    .search-icon:hover{
      cursor: pointer;
    }
</style>


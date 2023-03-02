<template>
    <div id="login">
        <form class="form" @submit.prevent="login">
            <label for="username">username</label>
            <input v-model="username" class="input" type="text">
            <label for="password">password</label>
            <input v-model="password" class="input" type="password">
            <button class="btn">login</button>
        </form>
    </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
    setup() {
        const username = ref()
        const password = ref()
        const route = useRoute()
        const router = useRouter()
        const login = () => {
            window.user = username.value
            const redirectPath = route.query.redirect || "/protected"
            router.push(redirectPath)
        }
        return { username, password, login }
    },
}
</script>
<template>
    <div>
        <h1>greeings, {{ username }}</h1>
        <button @click="logout">logout</button>
        <router-link :to="{ name: 'invoices' }">
            <button>invoices</button>
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: window.user
        }
    },
    methods: {
        logout() {
            window.user = null
            this.$router.push({ name: "Home" })
        }
    }
}
</script>
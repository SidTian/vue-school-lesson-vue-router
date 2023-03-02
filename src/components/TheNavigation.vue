<template>
    <div id="nav">
        <AppLink id="logo" to="/"> Vue-Router App</AppLink>
        <AppLink v-for="destination in destinations" :key="destination.id"
            :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
            {{ destination.name }}
        </AppLink>
        <AppLink :to="{ name: 'Protected' }">Dashboard</AppLink>
        <AppLink to="https://sidtian.club">Blog</AppLink>
    </div>
</template>
<script>
import AppLink from "@/components/AppLink.vue";
import sourceData from "@/data.json";
export default {
    data() {
        return {
            destinations: sourceData.destinations,
        };
    },
};
</script>
<style>
/* #nav .active-link {
  color: red;
  border-bottom: 1px solid red;
} */
</style>
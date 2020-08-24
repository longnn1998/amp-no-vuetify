<template>
    <div v-if="this.$isAMP">
        <h1>AMP Page</h1>
    </div>
</template>

<script>
export default {
    amp: 'hybrid',
    ampLayout: 'amp',
    mounted() {
        if(this.$isAMP){
            console.log(this.$isAMP);
        }
    }
}
</script>

<style scoped>

</style>
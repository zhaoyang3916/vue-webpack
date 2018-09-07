<template>
    <section class="main">
        <p>我来了{{name}}</p>
    </section>
</template>
 
<script>
export default {
    data () {
        return {
            name:"vue + webpack"
        }
    }
}
</script>
 
<style lang="less">
.main>p{
    color: #f00;
    css {
      color: #000;
    }
}
</style>
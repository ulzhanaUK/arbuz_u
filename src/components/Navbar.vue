<template>
<vk-navbar>
    <vk-navbar-nav slot="left">
        <vk-navbar-nav-item title="Логин" href="/#/login"></vk-navbar-nav-item>
        <vk-navbar-nav-item title="Регистрация" href="/#/register"></vk-navbar-nav-item>
        <vk-navbar-nav-item title="Главная" href="/#/"></vk-navbar-nav-item>
    
        <vk-navbar-nav-item title="Заказы" href="/#/orders"></vk-navbar-nav-item>
    </vk-navbar-nav>
    <vk-navbar-nav slot="right">
        <vk-navbar-logo slot="left" href="/#/" style="position: relative; left: 30%;"><a><img style="width: 5%;" src="../assets/logo.png"></a></vk-navbar-logo>
    </vk-navbar-nav>
</vk-navbar>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.uk-navbar-container:not(.uk-navbar-transparent) {
    background: #ffffff;
}
element.style {
    height: 0px;
    margin: 0px;
}
.uk-navbar-center {
    margin-left: 13%;
}
</style>
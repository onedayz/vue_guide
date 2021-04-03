<template>
    <div class="msweeper-page">
        <div class="title">밟으면 마이아파</div>
        <ul class="toolbar">
            <li class="game" tabindex="1" :class="{open:menu.game}" @click="menu.game=!menu.game" @blur="menu.game=false">
                <div class="context-menu">Menu</div>
                <div class="cancel" />
                <div class="menu">
                    <ul>
                        <li v-for="item of levels" :key="item.name" :class="{checked:level===item}" @click="changeLevel(item)">
                            <span class="check">✔</span> {{ item.name }}
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <minesweeper :level="level" :qmark="qmark" />
    </div>
</template>

<script>
import Minesweeper from './msweeper'

export default {
    name: 'ms',
    components: { Minesweeper },
    data () {
        return {
            levels: [
                { name: 'Beginner', size: [9, 9], mineTotal: 10 },
                { name: 'Intermediate', size: [16, 16], mineTotal: 40 },
                { name: 'Expert', size: [16, 30], mineTotal: 99 }
            ],
            level : { name: 'Beginner', size: [9, 9], mineTotal: 10 },
            qmark: false,
            menu: { game: false }
        }
    },
    computed: {
        isMenuOpen () { return !Object.values(this.menu).every(x => !x) }
    },
    watch: {
        isMenuOpen (v) { this.$emit('menu', v) }
    },
    methods: {
        changeLevel (item) {
            this.level = item
            this.$emit('changeLevel', item)
        }
    },
    mounted(){
        document.getElementsByClassName('frame-side')[0].style['display'] = 'none';
    },
    beforeUnmount() {
        document.getElementsByClassName('frame-side')[0].style['display'] = 'block';
    },
};
</script>

<style scoped lang="scss">
.msweeper-page{
    position: fixed;
    top: 0; left:0; width: 100%; height: 100vh;
    padding: 20px;
    display: flex; justify-content: center; align-items: center;
    flex-direction: column;
    background-color: $color__gray-800;
    color:  $color__gray-200;
    .title{
        position: absolute;
        top: 48px;left: calc(50% - 230px);
        font-size: 64px; font-weight: bold;
    }
}
:focus {outline: none;}
ul {list-style: none;}
.toolbar {
    padding: 1px 0;
    margin: 0 0 8px 0;
    position: relative;
    user-select: none;
    flex-direction: row;
    display: flex;
    font-size: 16px; font-weight: bold;
}
.toolbar > li {
    display: flex;
    cursor: default;
    position: relative;
}
.toolbar > li > .context-menu {
    display: flex;
    align-items: center;
    border: solid 1px transparent;
    height: 32px; width: 64px; justify-content: center;
    padding: 2px 4px;
    cursor: pointer;
}
.toolbar > li > .context-menu:hover:not(.help) {border: outset 1px #ddd; background-color: $color__gray-200; color:$color__gray-800;}
.toolbar > li.open > span {border: inset 1px  $color__gray-200;}
.toolbar > li.open .cancel {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.toolbar > li:not(.open) > .menu {display: none;}
.menu {
    position: absolute;
    border: solid 1px silver;
    border-right-color: #000;
    border-bottom-color: #000;
    background-color: silver;
    top: 100%;
    left: 0; font-size: 14px; font-weight: 300;
}
.menu hr {
    border-style: inset;
    border-width: 1px;
    margin: 3px 1px 4px 1px;
}
.menu > ul {
    border: outset 1px $color__gray-200;
    width: 120px;
    padding: 1px;
    color:$color__gray-800;
}
.menu > ul > li {padding: 4px 6px;}
.menu > ul > li.checked > .check {visibility: visible;}
.menu > ul > li > .check {visibility: hidden;}
.menu > ul > li:hover {
    color: $color__white;
    background-color: #0000a8;
}
.check {font-weight: bolder;}
</style>

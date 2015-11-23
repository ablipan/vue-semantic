<style lang="stylus" scoped>
.fade-transition
  position fixed
  transition all .3s ease
  top 0
  width 100%
  z-index 10000
.fade-enter
.fade-leave
  height 0
  opacity 0
.message
  border-radius 0
@media (min-width: 1000px)
  .message
    width 500px !important
    left calc(50% - 250px)
</style>
<template>
  <div class="ui icon floating message" v-show="show" :class="type" transition="fade">
    <i class="close icon" v-show="dismissable" @click="this.show=false"></i>
    <i class="icon" :class="[icon]"></i>
    <div class="content">
      <div class="header" v-text="title"></div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    type: {
      type: String,
      default: 'info'
    },
    duration: {
      type: String,
      default: 3000
    },
    show: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    dismissable: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show(val) {
      if (this._timeout) clearTimeout(this._timeout);
      if (val && !!this.duration) {
        this._timeout = setTimeout(()=>this.show = false, this.duration);
      }
    }
  },
  computed: {
    icon() {
      switch (this.type) {
        case 'info':
          return 'meh';
        case 'warning':
          return 'warning';
        case 'success':
          return 'smile';
        case 'error':
          return 'frown';
        default :
          return '';
      }
    }
  },
};
</script>

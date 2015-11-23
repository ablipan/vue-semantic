<template>
 <div v-el:modal class="ui modal small">
    <i class="close icon" v-if="dismissable" @click="onCancel"></i>
    <div class="header" v-show="title" v-text="title"></div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="actions">
      <div class="ui deny button" v-if="cancelable" v-text="cancel" @click="onCancel"></div>
      <div class="ui red button" v-text="confirm" @click="onConfirm"></div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    show: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    title: {
      type: String,
      default: '提示'
    },
    dismissable: {
      type: Boolean,
      default: true
    },
    cancelable: {
      type: Boolean,
      default: true
    },
    cancel: {
      type: String,
      default: '取消'
    },
    confirm: {
      type: String,
      default: '确定'
    }
  },
  data() {
    return {
    };
  },
  watch: {
    show(val) {
      if (val) {
        $(this.$els.modal).modal('show');
      }else {
        $(this.$els.modal).modal('is active') && $(this.$els.modal).modal('hide');
      }
    }
  },
  methods: {
    onCancel() {
      this.show = false;
    },
    onConfirm() {
      this.$dispatch('on-confirm');
    }
  },
  ready() {
    // reset the show!
    $(this.$els.modal).modal({onHidden: ()=>{
      this.show = false;
    }});
  }
};
</script>

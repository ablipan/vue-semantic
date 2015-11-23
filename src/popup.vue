<style>
</style>

<template>
<div>
<div v-el:pop
  :data-title="title"
  :data-content="content"
  :data-html="html"
  :data-variation="variation"
  :data-position="position">
  <slot></slot>
</div>
<div class="ui popup">
  <slot name="pop"></slot>
</div>
</div>
</template>

<script>
let self;
export default{
  props: {
    title: String,
    // text content
    content: String,
    // html content
    html: String,
    variation: String,
    position: {
      type: String,
      default: 'top left',
    }
  },
  ready() {
    self = this;
    $(self.$els.pop).popup({
      inline: true
    });
  }
};
</script>

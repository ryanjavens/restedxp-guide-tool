<template>
  <li class="list-group-item">
    <input v-model="myText" class="form-control" type="text" required>
    <button @click.prevent="deleteGuideStepItem" class="btn btn-danger float-end">Delete item</button>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  computed: {
    myText: {
      get() {
        return this.item.text;
      },
      set(input) {
        this.$emit('updateGuideStepItem', this.item, input);
      }
    }
  },
  methods: {
    deleteGuideStepItem() {
      this.$emit('deleteGuideStepItem', this.item);
    }
  }
}
</script>

<style>

</style>
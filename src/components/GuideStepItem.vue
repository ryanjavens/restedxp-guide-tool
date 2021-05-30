<template>
  <li class="list-group-item">
    <input v-model="myText" class="form-control" type="text" required>
    <button @click.prevent="deleteGuideStepItem" class="btn btn-danger float-end">Delete item</button>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    },
    id: {
      required: true,
      type: Number
    }
  },
  computed: {
    myText: {
      get() {
        return this.text;
      },
      set(input) {
        this.$emit('updateGuideStepItem', this.id, input);
      }
    }
  },
  methods: {
    deleteGuideStepItem() {
      this.$emit('deleteGuideStepItem', this.id);
    }
  }
}
</script>

<style>

</style>
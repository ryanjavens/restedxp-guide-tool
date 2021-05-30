<template>
  <div class="card mb-3">
    <div class="card-header">
      Step {{ guideStep.id }}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Item 1</li>
      <li class="list-group-item">Item 2</li>
      <li class="list-group-item">Item 3</li>
    </ul>
    <div class="card-footer text-end">
      <button @click.prevent="deleteStep" class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guideStep: {
      required: true,
      type: Object
    }
  },
  methods: {
    deleteStep() {
      this.$emit('clickDelete', this.guideStep);
    }
  }
}
</script>

<style>

</style>
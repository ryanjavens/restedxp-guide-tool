<template>
  <div class="card mb-3">
    <div class="card-header">
      Step {{ guideStep.id }}
    </div>
    <ul class="list-group list-group-flush" v-if="guideStep.items.length">
      <GuideStepItem v-for="item in guideStep.items" :key="item.id" :id="item.id" :text="item.text" 
      @updateGuideStepItem="updateGuideStepItem" @deleteGuideStepItem="deleteGuideStepItem"/>
    </ul>
    <div class="card-footer">
      <button @click.prevent="createGuideItem" class="btn btn-success">Add item</button>
      <button @click.prevent="deleteStep" class="btn btn-danger float-end">Delete step</button>
    </div>
  </div>
</template>

<script>
import GuideStepItem from '../components/GuideStepItem.vue'

export default {
  components: { GuideStepItem },
  props: {
    guideStep: {
      required: true,
      type: Object
    }
  },
  methods: {
    deleteStep() {
      this.$emit('clickDelete', this.guideStep);
    },
    createGuideItem() {
      this.$emit('createGuideStepItem', this.guideStep);
    },
    updateGuideStepItem(guideStepItemId, text) {
      this.$emit('updateGuideStepItem', this.guideStep, guideStepItemId, text);
    },
    deleteGuideStepItem(guideStepItemId) {
      this.$emit('deleteGuideStepItem', this.guideStep, guideStepItemId);
    }
  }
}
</script>

<style>

</style>
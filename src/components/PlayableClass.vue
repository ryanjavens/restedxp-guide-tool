<template>
  <li>
    <img :class="computedClass" :src="playableClass.imageUrl" :alt="playableClass.name" :title="playableClass.name"  @click="clickClass">
  </li>
</template>

<script>
  export default {
    props: {
      playableClass: {
        required: true,
        type: Object
      }
    },
    computed: {
      computedClass() {
        let className = '';

        if(this.playableClass.status === 1) {
          className = 'selected';
        }
        else if(this.playableClass.status === 2) {
          className = 'excluded';
        }
        else {
          className = '';
        }

        return className;
      }
    },
    methods: {
      clickClass() {
        this.$emit('clickClass', this.playableClass);
      }
    }
  }
</script>

<style scoped>
  li {
    display: inline;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  img {
    filter: grayscale(100%);
    border: 1px solid transparent;
  }

  img.selected {
    filter: grayscale(100%) sepia(100%) saturate(500%) brightness(75%) hue-rotate(80deg);
    border: 1px solid green;
  }

  img.excluded {
    filter: grayscale(100%) sepia(100%) saturate(500%) brightness(75%) hue-rotate(305deg);
    border: 1px solid red;
  }
</style>
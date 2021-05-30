<template>
  <div class="row">
    <div class="col">
      <h1 class="text-center">New Guide</h1>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <input v-model="guideName" class="form-control" type="text" placeholder="Guide name *" required>
        </div>
        <div class="mb-3">
        <h3>Select classes *</h3>
        <p>Please select which classes to include/exclude for this guide.</p>
        <ul>
          <li style="color: #ffffff;">
            Gray - unselected
          </li>
          <li style="color: green;">
            Green - included
          </li>
          <li style="color: red;">
            Red - excluded
          </li>
        </ul>
        <ul class="class-list" v-if="playableClasses.length">
          <PlayableClass v-for="playableClass in playableClasses" :key="playableClass.id" :playableClass="playableClass" 
          @clickClass="changeStatus" />
        </ul>
        <div v-if="playableClassValidation">
          <p style="color: red;">{{ playableClassValidation }}</p>
        </div>
        <div class="mb-3">
          <h3>Guide steps</h3>
          <div v-if="guideSteps.length">
            <GuideStep v-for="guideStep in guideSteps" :key="guideStep.id" :guideStep="guideStep" @clickDelete="deleteGuideStep"/>
          </div>
          <button @click.prevent="createGuideStep" class="btn btn-primary">+ Add guide step</button>
        </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Create guide</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import PlayableClass from '../components/PlayableClass.vue'
  import GuideStep from '../components/GuideStep.vue'

  const createPlayableClass = (name, imageUrl, id) => ({
    name,
    imageUrl,
    id,
    status: 0
  });

  const createGuideStep = (id) => ({
    id,
    playableClasses: [],
    items: []
  });

  export default {
    name: 'Guide',
    components: { PlayableClass, GuideStep },
    data() {
      return {
        guideName: '',
        playableClasses: [
          createPlayableClass("Druid", require("../assets/img/classes/border/Ui-charactercreate-classes_druid.png"), 0),
          createPlayableClass("Hunter", require("../assets/img/classes/border/Ui-charactercreate-classes_hunter.png"), 1),
          createPlayableClass("Mage", require("../assets/img/classes/border/Ui-charactercreate-classes_mage.png"), 2),
          createPlayableClass("Paladin", require("../assets/img/classes/border/Ui-charactercreate-classes_paladin.png"), 3),
          createPlayableClass("Priest", require("../assets/img/classes/border/Ui-charactercreate-classes_priest.png"), 4),
          createPlayableClass("Rogue", require("../assets/img/classes/border/Ui-charactercreate-classes_rogue.png"), 5),
          createPlayableClass("Shaman", require("../assets/img/classes/border/Ui-charactercreate-classes_shaman.png"), 6),
          createPlayableClass("Warlock", require("../assets/img/classes/border/Ui-charactercreate-classes_warlock.png"), 7),
          createPlayableClass("Warrior", require("../assets/img/classes/border/Ui-charactercreate-classes_warrior.png"), 8)
        ],
        guideSteps: [],
        playableClassValidation: ''
      }
    },
    methods: {
      changeStatus(playableClass) {
        // Possible values for status are 0, 1, 2
        // 0 = Not selected
        // 1 = Selected
        // 2 = Excluded
        if(playableClass.status === 2) {
          playableClass.status = 0;
        }
        else {
          playableClass.status++;
        }
      },
      handleSubmit() {
        // Only grab selected classes
        var selectedClasses = this.playableClasses.filter(i => i.status === 1 || i.status === 2);

        if(selectedClasses.length > 0) {
          // Clear playableClassValidation if it exists
          if(this.playableClassValidation != '') {
            this.playableClassValidation = '';
          }
          const REGISTER_GUIDE_LUA_METHOD_NAME = 'RXPGuides.RegisterGuide';
          var FileSaver = require('file-saver');

          var guideBody = '<< ';
          // Parse player class data into LUA string
          selectedClasses.forEach((playableClass, index) => {
            var includeSlash = true;
            if(index === selectedClasses.length - 1) {
              includeSlash = false;
            }
            guideBody += this.parseSelectedPlayableClass(playableClass, includeSlash);
          });

          var blob = new Blob([`${REGISTER_GUIDE_LUA_METHOD_NAME}("${this.guideName}",[[\n${guideBody}\n]])`], 
          {type: "application/x-lua"});
          FileSaver.saveAs(blob, `${this.guideName}.lua`);
        }
        else {
          // TODO: Determine if someone would want to have no classes selected where guide applies to all. 
          // Maybe just pop up a warning message in this case?
          this.playableClassValidation = '* Please select the classes that are included/excluded from this guide.'
        }
      },
      parseSelectedPlayableClass(playableClass, includeSlash) {
        var classString = '';

        if(playableClass.status === 2) {
          classString += '!';
        }

        classString += playableClass.name;

        if(includeSlash) {
          classString += '/';
        }

        return classString;
      },
      createGuideStep() {
        this.guideSteps.push(createGuideStep(this.guideSteps.length));
      },
      deleteGuideStep(guideStep) {
        this.guideSteps = this.guideSteps.filter(step => step !== guideStep);
      }
    }
  }
</script>

<style scoped>
  ul.class-list {
    list-style-type: none;
    padding-left: 0;
    white-space: nowrap;
    width: 100%;
    text-align: center;
  }
</style>
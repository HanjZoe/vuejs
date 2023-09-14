<template>
  <div class="my-multiselect"
       @click="handleClick"
       @blur="focused = false"
       tabindex="-1"
       ref="parent"
       :style="{width: width}"
  >

    <div class="my-multiselect_selected" v-for="(option, i) in formattedOptions" :key="i"
         v-show="option.checked"
    >
      {{ option[displayProperty] }}
      <span class="my-multiselect_remove" @click="preventClose($event); handleOptionClick(i)"> &times; </span>
    </div>
    <div class="my-multiselect_options" v-show="focused" :style="{top: optionsTop}" @click="preventClose">
      <div class="my-multiselect_option"
           :class="{'my-multiselect_options--checked' : option.checked }"
           v-for="(option, i) in formattedOptions" :key="i" @click="handleOptionClick(i)">
        <div class="my-multiselect_checkbox">

        </div>
        <div class="my-multiselect_text">
          {{ option[displayProperty] }}
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "my-multiselect",
  data(){
    return{
      focused: false,
      optionsTop:  '34px',
    }
  },
  computed: {
    formattedOptions(){



      let fo = this.options.map(option => {
        let checked = this.modelValue.some(v =>  v === option[this.valueProperty]);
        return {...option, checked};
      });
      return fo;
    }
  },
  mounted() {
    this.fixTop();
  },
  methods:{
    preventClose(e){
      e.stopPropagation();
    },
    handleOptionClick(i){





      let clickedValue = this.options[i][this.valueProperty];
      let newValue = [...this.modelValue];
      let exisIndex = this.modelValue.findIndex(v => v === clickedValue);


      if(exisIndex === -1){
        // this.modelValue.push(clickedValue);
        newValue.push(clickedValue);
      } else {
        newValue.splice(exisIndex, 1);
      }

      this.$emit("update:modelValue",newValue);
      setTimeout(this.fixTop, 100);

    },
    fixTop(){
      this.optionsTop = this.$refs.parent.clientHeight + 2 + 'px';
    },
    handleClick(){
      this.focused = !this.focused;
    },
  },

  props: {
    width:{
      type: String,
      default: "333px"
    },
    options:{
      type: Array,
      default: () => []

    },
    modelValue: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    },
    placeholder:{
      type: String,
      default: "Click to select"
    },
    displayProperty:{
      type: String,
      default: "name"
    },
    valueProperty:{
      type: String,
      default: "value"
    },

  }
}
</script>

<style>
.my-multiselect{
  background: #fff;
  padding: 6px 12px;
  margin: 8px 0;

  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  min-height: 33px;
  min-width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.my-multiselect:focus{
  outline: none;
}
.my-multiselect_placeholder{
  color: #929292;
}
.my-multiselect_selected{
  border: 1px solid #e0e0e0;
  padding: 4px 8px;
  margin: 3px 3px;
  color:#099;
}
.my-multiselect_remove{
  cursor: pointer;
  padding-right: 7px;

}
.my-multiselect_remove:hover{
  color: #099;
  font-weight: bold;
}
.my-multiselect_options{
  position: absolute;
  top: 34px;
  right: 0;
  left: 0;
  display: flex;
  background: #fff;
  flex-direction: column;
  box-shadow: 0 3px 3px 2px #e3e3e3;
  padding: 5px 0;
  min-height: 55px;
  max-height: 188px;
  overflow-y: auto;
}
.my-multiselect_option{
  padding: 6px 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.my-multiselect_option--checked{
  color: #099;
  font-weight: bold;
}
.my-multiselect_checkbox{
  width: 22px;
  height: 22px;
  border: 1px solid #969696;
  margin-right: 7px;
  position: relative;
}
.my-multiselect_options--checked .my-multiselect_checkbox{
  border: 1px solid #099;
  background: #099;
}
.my-multiselect_options--checked .my-multiselect_checkbox::after{
  width: 11px;
  height: 6px;
  border-left: 2px solid rgb(255, 255, 255);
  border-bottom: 2px solid rgb(255, 255, 255);
  content: "";
  z-index: 9999;
  position: absolute;
  transform: rotate(-45deg);
  left: 5px;
  top: 4px;
}
.my-multiselect_text{
  color: #099;
}
</style>
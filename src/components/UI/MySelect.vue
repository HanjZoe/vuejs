<template>
  <div my-select>
    <select  id="select" class="my-select_select"
            :class="{'my-select_select--error' : errorMessage}"
            @change="handleChange"  ref = "childRef" :modelValue = "modelValue">
      <option  value="" > -- {{ placeholder }} -- </option>

      <option :modelValue="option" v-for = "(option , i) in options" :key = i  :selected="modelValue=== option" > {{option}} </option>

    </select>
    <p class = "error-message">
      {{errorMessage}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'my-select',
  props:{
    options:{
      type: Array,
      default:() => [],
    },
    modelValue:{
      default: "",
    },
    placeholder:{
      type: String,
      default: 'Выберите',
    },
    displayProperty:{
      type: String,
      default: "name",
    },
    valueProperty:{
      type: String,
      default: "value",
    },
    required:{
      default: false,
    }
  },
  data(){
    return{
      validated: false,
    };
  },
  computed:{
    optionsType(){

      let ot = "string";
      if(this.options.length > 0 && typeof this.options[0] !== 'string'){
        ot = "object";
      }
      return ot;
    },
    errorMessage(){
      if(!this.validated){
        return '';
      }
      if((this.required || this.required === "") && !this.modelValue){

        return 'не ок'
      }
      return '';
    }
  },
  methods:{
    handleChange(e){


      this.$emit('update:modelValue',e.target.value);
      this.validated = false;

    },
    validateForm(){
      this.validated = false;

      if(this.errorMessage === ''){
        return true;
      }
      this.focus();
      return false;
    },
    focus(){

      this.$refs.childRef.focus();
    }
  }
}
</script>

<style>
.my-select_select{
  background: #fff;
  padding: 6px 12px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
}
.my-select_select:focus{
  outline: none;
}
.my-select_select--error{
  border: 1px solid red;
}
p.error-message{
  color: red;
  margin: 0;
  padding: 0;
}
</style>
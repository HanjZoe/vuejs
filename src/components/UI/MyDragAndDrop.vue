<template>
  <div class="card">
    <div class="top">
    </div>
    <div class="drag-area" @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeve" @drop.prevent="onDrop">
      <span v-if="!isDragging">
Перетащите сюда картинку или
        <span class ="select" role="button" @click="selectFiles">
          Добавте
        </span>
      </span>
      <div v-else class="select">Перетащите сюда</div>
      <input name="file" type="file" class="file" ref="fileInput" @change="onFileSelect"/>
    </div>
    <div class = "container">
      <div class ="images" v-for="(image, index) in imagess" :key="index">
        <span class="delete" @click="deteleImage(index)">&times;</span>
        <img :src="image.url"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {

    name: 'my-drag-and-drop',
  data(){
    return{
      imagess:[],
      isDragging: false,
    }
  },
  props:{
    images:{
        Type: String,
        default: '',
      },

  },

  methods:{
    selectFiles(){
      this.$refs.fileInput.click();
    },
    onFileSelect(event){
      const files = event.target.files;

      if(files.length === 0) return;
      if((files[0].type.split("/")[0] != "image")|| (!this.imagess.some((e) => e.name === files[0].name))) {
        this.imagess.splice(0,1)
        this.imagess.push({name: files[0].name, url: URL.createObjectURL(files[0])});
        console.log(this.imagess);
        this.$emit("update:modelValue", URL.createObjectURL(files[0]));
      }
      /*for (let i =0; i < files.length; i++){
        if(files[i].type.split("/")[0] != "image") continue;
        if(!this.images.some((e) => e.name === files[i].name
        )){

          this.images.push({name: files[i].name, url:URL.createObjectURL(files[i])});
        }
      }*/
    },
    deteleImage(index){
      this.imagess.splice(index,1);
      this.$emit("update:modelValue", this.imagess);
    },
    onDragOver(event){
      event.preventDefault();
      this.isDragging =true;
      event.dataTransfer.dropEffect = "copy";
    },
    onDragLeve(event){
      event.preventDefault();
      this.isDragging =false;
    },
    onDrop(event){
      event.preventDefault();
      this.isDragging = false;
      const files = event.dataTransfer.files;
      if((files[0].type.split("/")[0] != "image")|| (!this.imagess.some((e) => e.name === files[0].name))) {
        this.imagess.splice(0,1)
        this.imagess.push({name: files[0].name, url: URL.createObjectURL(files[0])});
        this.$emit("update:modelValue", URL.createObjectURL(files[0]));
      }
      // if(files.length === 0) return;
     /* for (let i =0; i < files.length; i++){
        if(files[i].type.split("/")[0] != "image") continue;
        if(!this.images.some((e) => e.name === files[i].name)){
          this.images.push({name: files[i].name, url:URL.createObjectURL(files[i])});
        }
      }*/
    }
  },

  mounted() {
    this.$nextTick(function () {
      if(this.images.length > 0){
        this.imagess.push({name: "add", url: this.images});
      }
    })
    }
}
</script>
<style scoped>
.card{
  width: 100%;
  padding: 10px;
  box-shadow: 0 0 5px #ffdfdf;
  border-radius: 5px;
  overflow: hidden;
}
.card .top {
  text-align: center;

}
.card p{
  font-weight: bold;
  color: #099;

}
.card button{
  outline: 0;
  border: 0;
  color: #fff;
  border-radius: 4px;
  font-weight: 400;
  padding: 8px 13px;
  width: 100%;
  background: #099;

}
.card .drag-area{
  height: 150px;
  border-radius: 5px;
  border: 2px dashed #099;
  background: #f4f3f9;
  color: #099;
  display: flex;
  justify-content: center;
  align-items:center;
  user-select:center;
  -webkit-user-select: none;
  margin-top: 10px;

}
.card .drag-area .visible{
  font-size: 18px;
}
.card .select{
  color: #5256ad;
  margin-left: 5px;
  cursor: pointer;
  transition: 0.4s;

}
.card .select:hover{
  opacity: 0.6;


}
.card .container{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  max-height: 200px;
  position: relative;
  margin-bottom: 8px;
}
.card .container .images{
  width: 75px;
  margin-right: 5px;
  height: 75px;
  position: relative;
  margin-bottom: 8px;
  padding-top: 15px;
}
.card .container .images img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.card .container .images span{
  position: absolute;
  top: -2px;
  right: 9px;
  font-size: 20px;
  cursor: pointer;
}
.card input, .card .drag-area .on-drop, .card .drag-area.dragover .visible
{
  display: none;
}
.delete{
  z-index: 999;
  color: #099;
}
</style>
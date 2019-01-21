<template>
  <div class="about">
    <div class="menu">
      <button @click="addItem()">Add photo</button>
      <button @click="addMoreItems()">Add 100 photos</button>
      <button @click="removeItem()">Remove photo</button>
    </div>
    <div id="album">
      <img class="photo" v-for="img in images" :src="img"/>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      images:[]
    }
  },
  computed:{
    imgSrc() {
      return require('../assets/image.jpg')
    }
  },
  methods: {
    addItem(){
      this.images.push(this.imgSrc)
    },
    addMoreItems(){
      for(var i=0;i<100;i++)
        this.images.push(this.imgSrc)
    },
    removeItem(){
      this.images.pop()
    }
  }
}
</script>
<style scoped lang="scss">
  #album{
    display: inline-block;
    width: 1570px;
    box-sizing: border-box;
  }
  .photo{
      height: 300px;
      width:300px;
      margin-right: 5px;
  }
  button{
    display: block;
  }
  .menu{
    display: flex;
    flex-direction: row;
    width: 325px;
    justify-content: space-around;
    margin-bottom: 10px;
    margin-left:auto;
    margin-right:auto;
  }
</style>
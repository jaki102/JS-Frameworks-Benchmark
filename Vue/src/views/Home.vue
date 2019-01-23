<template>
  <div class="home">
    <div class="menu">
        <button id="createRow" @click="createRow()">Create 100 rows</button>
        <button id="multiCreateRow" @click="multiCreateRow()">Create 1,000 rows</button>
        <button id="update" @click="updateRows()">Update rows</button>
        <button id="swap" @click="swapRows()">Swap rows</button>
        <button id="clear" @click="removeItem()">Clear</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows">
          <td>
            <span>{{row.id}}</span>
          </td>
          <td>
            <span>{{row.title}}</span>
          </td>
          <td>
            <span>{{row.body}}</span>
          </td>
        </tr>       
      </tbody>
    </table>
  </div>
</template>
<script>
export default{
  data(){
    return{
      rows:[]
    }
  },
  methods: {
    createRow(){
      for(var i=0;i<100;i++){
        var postNumber = Math.floor(Math.random() * 100) + 1;
        var url = 'https://jsonplaceholder.typicode.com/posts/'+ postNumber;
        var k = this.rows.length;
        fetch(url)
          .then(response => response.json())
          .then(json => this.rows.push({id:++k, title:json.title, body:json.body}))
      }
    },
    multiCreateRow(){
      for(var i=0;i<1000;i++){
        var postNumber = Math.floor(Math.random() * 100) + 1;
        var url = 'https://jsonplaceholder.typicode.com/posts/'+ postNumber;
        var k = this.rows.length;
        fetch(url)
          .then(response => response.json())
          .then(json => this.rows.push({id:++k, title:json.title, body:json.body}))
      }
    },
    updateRows(){
      for (let i = 0; i < this.rows.length; i++) {
        const postNumber = Math.floor(Math.random() * 100) + 1;
        const url = 'https://jsonplaceholder.typicode.com/posts/'+ postNumber;

        fetch(url)
          .then(response => response.json())
          .then(json => {
            this.rows[i].title = json.title
            this.rows[i].body = json.body})
      }
    },
    swapRows(){
      if(this.rows.length >= 16){
        var depotTitle = this.rows[1].title;
        var depotBody = this.rows[1].body;
        this.rows[1].title = this.rows[15].title;
        this.rows[1].body = this.rows[15].body;
        this.rows[15].title = depotTitle;
        this.rows[15].body = depotBody;
      }
    },     
    removeItem(){
      while(this.rows.length > 0) {
        this.rows.pop()
      }     
    }
  }
}
</script>
<style scoped lang="scss">
  table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 15px;
  }
  td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
  }
  tr:nth-child(even) {
      background-color: #dddddd;
  }
  .menu{
    width: 500px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
</style>
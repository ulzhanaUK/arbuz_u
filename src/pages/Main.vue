<template>
<div>
    <h1>Заказать Арбуз</h1>
    <center>
    <div class="card">
    <form action="/#/orders">
    <div class="container">
        <label for="fname">Количество: </label>
    <select id="number" name="количество">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br><br>

        <div class="grid-container">
  <div class="grid-item"><a href="#" @click="add_arbuz('1-1')"><img src="../assets/arbuz-1.png" style="width:50%;height:60%;"></a></div>
  <div class="grid-item"><a href="#" @click="add_arbuz('1-2')"><img src="../assets/arbuz-2.png" style="width:50%;height:60%;"></a></div>
  <div class="grid-item"><a href="#" @click="status_arbuz('Вы выбрали неспелый арбуз. Выберите другой арбуз.')"><img src="../assets/arbuz-3.png" style="width:50%;height:60%;"></a></div>  
  <div class="grid-item"><a href="#" @click="status_arbuz('Этот арбуз уже сорван. Выберите другой арбуз.')"><img src="../assets/arbuz-2.png" style="width:50%;height:60%;"></a></div>
  <div class="grid-item"><a href="#" @click="add_arbuz('2-2')"><img src="../assets/arbuz-3.png" style="width:50%;height:60%;"></a></div>
  <div class="grid-item"><a href="#" @click="add_arbuz('2-3')"><img src="../assets/arbuz-1.png" style="width:50%;height:60%;"></a></div>  
  <div class="grid-item"><a href="#" @click="add_arbuz('3-1')"><img src="../assets/arbuz-3.png" style="width:50%;height:60%;"></a></div>
  <div class="grid-item"><a href="#" @click="status_arbuz('Вы выбрали неспелый арбуз. Выберите другой арбуз.')"><img src="../assets/arbuz-1.png" style="width:50%;height:60%;"></a></div>
  <div class="grid-item"><a href="#" @click="status_arbuz('Вы выбрали неспелый арбуз. Выберите другой арбуз.')"><img src="../assets/arbuz-2.png" style="width:50%;height:60%;"></a></div>  
</div><br><br>

  <label for="fadress">Адрес: </label>
  <input type="text" id="fadress" name="fadress" value=""><br><br>
  <label for="ltel">Телефон: </label>
  <input type="tel" id="ltel" name="ltel" value="" placeholder="707-455-67-87" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"><br><br>
  <label for="ldate">Дата: </label>
  <input type="date" id="ldate" name="ldate"  value="2022-05-29" min="2022-05-29" max="2022-06-07"><br><br>
  <label for="ltime">Время: </label>
  <input type="time" id="ltime" name="ltime" min="09:00" max="20:00" value="13:00" required> 
  <small>Доставка работает с 9:00 до 20:00</small><br><br>
   <input type="checkbox" id="add_div" name="add_div">
      <label for="add_div">Порезать дольками</label><br><br>
  <center><input type="submit" value="Submit"></center>
    </div>
</form> 
<p>Выбранные арбузы: {{arbuz}}</p>
<p style="color: red">{{status_arb}}</p>
<!-- <p id="arbuz_a"></p> -->
    </div>
    </center>
</div>
</template>

<script>
export default {
  data() {
    return {
    arbuz : [],
    status_arb : ''
    }
  },
  methods: {
      add_arbuz(x){
          this.arbuz.push(x);
          console.log(this.arbuz);
      },
      status_arbuz(x){
          this.status_arb = x;
          console.log(this.arbuz);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  text-align: left;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
.grid-container {
  display: grid;
  gap: 50px 50px;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
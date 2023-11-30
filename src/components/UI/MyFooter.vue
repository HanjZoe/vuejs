<template>

  <footer class="row tm-row wrapper">


        <hr class="col-12">
        <div class="col-md-6 col-12 tm-color-gray content" >
          Design by: <a rel="nofollow"  class="tm-external-link footer_color">111</a>
        </div>
        <div class="col-md-6 col-12 tm-color-gray tm-copyright footer">
          Copyright 2023
        </div>

      </footer>

</template>
<script>

export default {
  name: 'my-footer',
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
.wrapper {
  display: table;
  height: 100%;
}
.content {
  display: table-row;
  height: 100%;
}


.footer {


  left: 3%;

  width: 70%;


}
.footer_color{
  color: #0CC !important;
}
</style>

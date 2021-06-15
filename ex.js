let screen1 = document.getElementById("screen");
let screen2 = document.getElementById("screentwo")

function input(num) {
  var lastVal = screen1.value.slice(screen1.value.length - 1);
  var opt = ['+','-','*','/'];
  if(opt.indexOf(lastVal) !== -1 && opt.indexOf(num) !== -1){
    screen1.value = screen1.value.slice(0,-1) + num
  }else{
      screen1.value += num;
  }

}

function result() {
  screen2.value = eval(screen1.value);
}

function blank() {
  screen1.value = "";
  screen2.value="";
}

function del (){
    screen1.value=screen1.value.slice(0,-1)
}

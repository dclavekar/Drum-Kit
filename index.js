// function handleclick() {
//   // alert("I got clicked ");
//   var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
// }
// function fun1()
// {
//     var audio=new Audio("sounds/crash.mp3");
//     audio.play();
// }
// function fun2()
// {
//     var audio=new Audio("sounds/kick-bass.mp3");
//     audio.play();
// }
// function fun3()
// {
//     var audio=new Audio("sounds/snare.mp3");
//     audio.play();
// }
// function fun4()
// {
//     var audio=new Audio("sounds/tom-1.mp3");
//     audio.play();
// }
// function fun5()
// {
//     var audio=new Audio("sounds/tom-2.mp3");
//     audio.play();
// }
// function fun6()
// {
//     var audio=new Audio("sounds/tom-3.mp3");
//     audio.play();
// }
// function fun7()
// {
//     var audio=new Audio("sounds/tom-4.mp3");
//     audio.play();
// }
var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var key = this.innerHTML; //takes key of the button pressed
    makeSound(key);
    buttonAnimation(key);
  });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key); //passes key of keyboard press
    buttonAnimation(event.key)
})

function makeSound(key) {
  switch (key) {
    case "w": {
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    }
    case "a": {
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    }
    case "s": {
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    }
    case "d": {
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    }
    case "j": {
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    }
    case "k": {
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    }
    case "l": {
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    }
  }
}

function buttonAnimation(key)
{
      document.querySelector("."+key).classList.add("pressed");
      setTimeout(function()
      {
        document.querySelector('.'+key).classList.remove("pressed");
      },100)
}
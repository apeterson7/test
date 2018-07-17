var images = new Array(3);

images[0] = "https://upload.wikimedia.org/wikipedia/commons/9/90/Bastet_Istanbul_museum.JPG";
images[1] = "https://upload.wikimedia.org/wikipedia/commons/7/76/TapetumLucidum.JPG";
images[2] = "https://upload.wikimedia.org/wikipedia/commons/b/bb/Kittyply_edit1.jpg";


var i = 0;

function goForward(){
  console.log(i)
  i = (i + 1)%3
  document.getElementById("image").src = images[i];
}

function goBackward(){
  console.log(i)
  if(i == 0){
    i = 2;
  }else{
    i = i - 1
  }
  document.getElementById("image").src = images[i];
}

function enlarge(){
  document.getElementById("image").style.height = "600px"
  document.getElementById("image").style.width = "600px"
}
function shrink(){
  document.getElementById("image").style.height = "500px"
  document.getElementById("image").style.width = "500px"
}

document.getElementById('previous').onclick = goBackward();
document.getElementById('next').onclick = goForward();

document.getElementByID('about').addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
}
);

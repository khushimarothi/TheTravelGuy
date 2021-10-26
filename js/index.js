
const colors=document.getElementsByClassName('theme-button');

let i;
for(i=0;i<colors.length ;i++){
    colors[i].addEventListener('click',changecolor );
}

function changecolor(){

  let color = this.getAttribute('data-color');
  document.documentElement.style.setProperty('--dark', color);

  let chng = this.getAttribute('data-color-light');
  document.documentElement.style.setProperty('--light', chng);
}

let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');


btn1.addEventListener('click', () => {
 document.getElementsByClassName('package review news').style.backgroundImage ="url(images/back1.png)";
});

btn2.addEventListener('click', () => {
  var div = document.getElementById('change');
  var news = document.getElementById("news");
  var review = document.getElementById("review");
  div.style.backgroundImage =" url(images/back2.png)";
 
  news.style.backgroundImage =" url(images/back2.png)";
 
  review.style.backgroundImage =" url(images/back2.png)";
});

function changeMecat(){
    let catImage = document.getElementById('catImage');
    catImage.src = "https://i.pinimg.com/originals/00/3b/f0/003bf01bd170cb73302bfd16c804ee81.jpg";
}

function changeMedog(){
    let dogImage = document.getElementById('dogImage');
    dogImage.src = "https://avatars.steamstatic.com/309bbf4d1835bb65cbb0854316575e8240b0dc26_full.jpg";
}


let cat1 = document.getElementById('cat1'); // получить элемент      
cat1.style.background = 'crimson'; // сделать его фон красным
function changeMecat1(){
    let cat1 = document.getElementById('cat1');
    cat1.style.background = 'teal';
}

let dog1 = document.getElementById('dog1'); // получить элемент      
dog1.style.background = 'lime'; // сделать его фон красным
function changeMedog1(){
    let dog1 = document.getElementById('dog1');
    dog1.style.background = 'Magenta';
}
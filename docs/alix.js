const img = document.querySelector(".contenedor-imgs");


// Solo prsentar 12 fotos en serie y ya

      // let i = 1;

     // function presentarFotos() {
      //   const image = new Image();
      //   let px = Math.floor(Math.random() * 50);
      //   let py = Math.floor(Math.random() * 40);
      //   let deg = Math.floor(Math.random() * 20);
      //   image.src = `imgs/img-${i}.png`;
      //   // let num = Math.floor(Math.random()*10)
      //   image.classList.add("img-cumple", "abs");
      //   let pic = img.appendChild(image);
      //   pic.style.transform = `translate(${px}px, ${py}px) rotate(${deg}deg) scale(.5)`

      //   i++;
      //   if (i > 12) {
      //     clearInterval(sI);
      //   }
      // }

      // let sI = setInterval(presentarFotos, 2000);




// Presentar fotos de manera aleatoria
let f = 1

      function presentarFotosRandom() {
        const image = new Image();
        let px = Math.floor(Math.random() * 40*f);
        let py = Math.floor(Math.random() * 30*f);
        let deg = Math.floor(Math.random() * 20*f);
        let i = Math.floor(Math.random()*12)+1
        image.src = `imgs/img-${i}.png`;
        // let num = Math.floor(Math.random()*10)
        image.classList.add("img-cumple", "abs");
        let pic = img.appendChild(image);
        pic.style.transform = `translate(${px}px, ${py}px) rotate(${deg}deg) scale(.5)`
        f = -f
        i++;
       
      }

      let sI = setInterval(presentarFotosRandom, 2000);





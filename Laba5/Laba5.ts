document.addEventListener("DOMContentLoaded", () => {
    console.log("Страница загрузилась");
   
  
    function getCurrentDate(): void {
      console.log(Date.now());
    }


    setTimeout(() => {
        clearInterval(intervalDescriptor);
        getCurrentDate();

        const intFunction = extFunction("qwerty");
        intFunction("12345");
    }, 60000);
  
    let sec = 1;
    let intervalDescriptor = setInterval(() => {
        console.log("Прошла(-о): " + sec + " секунд(-ы)(-а).");
        setTimeout(() => {
            sec+=5;
        }, 1);
    }, 4999);

    function extFunction(x: string) {
        console.log("Внешняя фунция вводим строку: " + x);
        return (y: string) =>
          console.log(
            "Возврат результата в виде функции с замыканием на внешнюю функцию: " +
              (x + y)
          );
      }
  });
function sleep(obj) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(obj), 9000);
    });
  }
  
  let promisse = sleep({ nome: "Karla" }).then((res) => console.log(res));



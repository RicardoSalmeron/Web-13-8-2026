// setTimeout(()=>{
//     console.log("Processo assíncorono")
// }, 2000);

// console.log("1-inicio do processo");
// setTimeout(()=>{

//     console.log("2-meio do processo");
// }, 1000);



// console.log("3-fim do processo");

// const btn = document.getElementById('botao');
// const popup = document.getElementById('popup');

// btn.addEventListener('click', () => {
//     popup.classList.add('popup-active')

    
//     setTimeout(() => {
//         console.log('chegou aqui!')
//         popup.classList.remove('popup-active')
//     }, 2500)
// });

// // setInterval(() =>{
// //     console.log('Tic');
// // }, 1);

// let counter = 0;
// const interval = setInterval(() => {
//     counter++;
//     console.log("Counter", counter);

//     if (counter >=5){
//         clearInterval(interval);
//         console.log("O intervalo foi removido")
//     };
// }, 1000);   


const eventoFuturo = (res) =>{
    return new Promise((resolve, reject) => {
        // if(res === true){
        //     resolve("Promessa Resolvida")
        // }else{
        //     reject("Promessa Rejeitada")
        // };
        setTimeout(() => {
            res ? resolve("Promessa resolvida") : reject("Promessa rejeitada")
        },2000)
    });
};
console.log(eventoFuturo(true));
console.log(eventoFuturo(false));

eventoFuturo(true)
    .then((response) => {
        console.log(response)
    });
eventoFuturo(false)
    .catch((error)=>{
        console.log(error);
    });
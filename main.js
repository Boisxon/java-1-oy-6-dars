// const userPassword = +prompt("Parolingizni kiriting")
// const userLogin = prompt("Loginingizni kiriting")


// const oquvchi = {
//     name: "Boisxon",
//     paswword:1294,
//     login: "bot"
// }

// if(userPassword == oquvchi.paswword && userLogin == oquvchi.login){
//     alert("Space hush kelisiz")
// }
// else if(userPassword == 0 && userLogin == ""){
//     alert("Iltimos malumot kiriting")
// }else{
//     alert("Xatolik. Ulanish uchun login va paroli kiriting")
// }

// const bot = "ismoil"

// console.log();










// const cars1 = ["BMW"]
// const cars2 = ["KIA"]
// const cars3 = ["MERS"]
// const cars4 = ["AUDI"]



// const anwer = +prompt("Iltimos tanlang: \n 1) BMW \n 2) KIA \n 3) MERS \n 4) AUDI")

// if(anwer == 1){
//     alert(`Javob: ${cars1}`)
// }else if(anwer == 2){
//     alert(`Javob: ${cars2}`)
// }else if(anwer == 3){
//     alert(`Javob: ${cars3}`)
// }else if(anwer == 4){
//     alert(`Javob: ${cars4}`)
// }else if(num1 == 0 ){
//     alert("Iltimos kiriting")
// }
// else{
//     alert("kiriting")
// }


// const num1 = ["Doniyor" , "Ismoil" , "Said" , "Mahmud" , "Boisxon"]
// const num = prompt("Ism qoshing");
// const anwer = prompt("Iltimos tanlang: \n 1) push \n 2) pop \n 3) shift \n 4) unshift")


// if(anwer == 1){
//     alert(`Javob: ${num1.push(num)}`)
//     console.log(num1);
    
// }else if(anwer == 2){
//     alert(`Javob: ${num1.pop()}`)
//     console.log(num1);
    
// }else if(anwer == 3){
//     alert(`Javob: ${num1.shift(num)}`)
//     console.log(num1);
    
// }else if(anwer == 4){
//     alert(`Javob: ${num1.unshift()}`)
//     console.log(num1);
    
// }else if(num1 == 0){
//     alert("Iltimos kiriting")
// }else if(num1 == 0){
//     alert("Iltimos kiriting")
// }
// else{
//     alert("Qiymat kiriting")
// }



// const num1 = ["olma" , "banan" , "shaftoli" , "gilos"]
// console.log(num1);
// const num2 = (`Boshlanishda Arryning uzinligi: ${num1.length}`)
// alert(num2)
// if(num1){
//     confirm(`Sizning arrayingizdan malumotlarni olib tashlamoqchimisiz ${num1.pop()}`)
//     console.log(num1);
//     alert(`Arryning uzinligi: ${num1.length}`)
// }else if(num1 == null){
//     confirm(`Sizning arrayingizdan malumotalarni olib tashlamoqchimisiz ${num1}`)
//     alert(`Arryning uzinligi: ${num1.length}`)
// }



const num1 = ["olma", "banan", "shaftoli", "gilos"];
console.log(num1);


const num2 = (`Boshlanishda Arryning uzunligi: ${num1.length}`);
alert(num2);

if (Array.isArray(num1) && num1.length > 0) {
    const bot = num1.pop();
    const bot1 = `Sizning arrayingizdan malumotlarni olib tashlamoqchimisiz: ${bot}`;
    if (confirm(bot1)) {
        console.log(num1); 
        alert(`Arryning uzunligi: ${num1.length}`);
    } else {
        alert(`Arryning uzunligi:4`);
    }
} 
    




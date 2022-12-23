const n1 = prompt("ilk sayi");
const n2 = prompt("ikinci sayi");
const op = prompt("Hangi işlemi yapmak istediğinizi seçiniz.. ( + , - , / , *");

if (op == "+") {
    console.log(`işlem sonucu ${n1 + n2}`);
}

else if (op == "-") {
    console.log(`işlem sonucu ${n1 - n2}`);
}

else if (op == "/") {
    console.log(`işlem sonucu ${n1/n2}`);
}

else if (op == "*") {
    console.log(`işlem sonucu ${n1*n2}`);
}
else alert("Geçersiz işlem.")
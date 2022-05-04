/*let n=document.getElementById('n').value;
i=1;
s1=3;
s2=2;
while(i<=n){
    if(i%2!=0){
        console.log(s1);
        s1=s1+3
    }else{
        console.log(s2);
        s2=s2+2;
    }
    i++;
}
console.log(n);*/
/*let n=prompt();
let mult=0;
let res='';
for(let i=2;i<n;i++){
    if(n%i==0){
        mult++;
        res=res+i+",";
    }
}
console.log('El numero ',n," tiene", mult ," divisores: ", res);*/



function juego() {
    let texto;
    let adiv=prompt('Adivina el numero menor a 20','')
    num=Math.floor(Math.random()*20);
    console.log(num)
    int=1;
    while (int<5){
        if (adiv > num) 
        {
            console.log("Prueba con un número más pequeño");
            adiv=prompt("Prueba con un número más pequeño, te quedan "+(5-int)+" intentos");
            int++;
            texto="Vuelve a intentarlo, el número era: "+num;              
        }
        else if (adiv < num) 
        {
            console.log("Prueba con un número más grande");
            adiv=prompt("Prueba con un número más grande, te quedan "+(5-int)+" intentos");
            int++;            
            texto="Vuelve a intentarlo, el número era: "+num;
        }
        else if (adiv == num) 
        {
            console.log("Correcto");
            texto="Lo hiciste muy bien, el número buscado es "+num;                    
            break;
        }            
    }
    document.getElementById("resp").innerHTML=texto;
}

function juego2() {
    let texto;
    let adiv=prompt('Adivina el numero menor a 10','')
    num=Math.floor(Math.random()*10);
    console.log(num)
    int=1;
    while (int<5){
        if (adiv == num) 
        {
            console.log("Lo lograste");            
            
            texto="Lo lograste :)";              
            break;
        }
        else
        {
            console.log("Prueba con otro número");
            adiv=prompt("Prueba con otro número, te quedan "+(5-int)+" intentos");
            int++;            
            texto="Vuelve a intentar :(";
        }     
    }
    document.getElementById("resp2").innerHTML=texto;
    document.getElementById("num").innerHTML=num;
}

console.log("aaa");
// alert("powitanie");

let Tool = function(name, price, weight, sound){
    this.name = name;
    this.price = price;
    this.weight = weight;
    this.sound = sound;
    this.toString = function(){
        return "Nazwa: " + this.name;
    }
}

tab = []
tab.push(new Tool("Młotek", 50, 700, "puk"));
tab.push(new Tool("Śrubokręt", 20, 150, ""));
tab.push(new Tool("Nożyce do drutu", 40, 300, "ciach"));
tab.push(new Tool("Młot pneumatyczny", 40, 300, "łubudubu"));

narzedzia = document.getElementById("narzedzia");
tekst = "";
for (element of tab){
    tekst += (element.name + "<br>");
}
narzedzia.innerHTML = tekst;

function losuj(){
    document.getElementById("wynik").innerHTML = tab[Math.floor(Math.random() * tab.length)];
}
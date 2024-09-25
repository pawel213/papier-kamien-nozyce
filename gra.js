let przegrane = 0;
let wygrane = 0;
let remisy = 0;

function wybierz(wyborGracza){
    let wynik = '';
    mozliwosci = "kpn";
    wyborKomputera = mozliwosci[Math.floor(Math.random() * 3)];

    let graczPelnaNazwa = "";
    let komputerPelnaNazwa = "";

    if(wyborGracza == "k"){
        graczPelnaNazwa = "kamień";
        if(wyborKomputera == "k"){
            wynik = "r";
        }
        if(wyborKomputera == "p"){
            wynik = "p";
        }
        if(wyborKomputera == "n"){
            wynik = "w";
        }
    }

    if(wyborGracza == "n"){
        graczPelnaNazwa = "nożyce";
        if(wyborKomputera == "k"){
            wynik = "p";
        }
        if(wyborKomputera == "p"){
            wynik = "w";
        }
        if(wyborKomputera == "n"){
            wynik = "r";
        }
    }

    if(wyborGracza == "p"){
        graczPelnaNazwa = "papier";
        if(wyborKomputera == "k"){
            wynik = "w";
        }
        if(wyborKomputera == "p"){
            wynik = "r";
        }
        if(wyborKomputera == "n"){
            wynik = "p";
        }
    }

    if(wyborKomputera == "k"){
        komputerPelnaNazwa = "kamień";
    }
    if(wyborKomputera == "p"){
        komputerPelnaNazwa = "papier";
    }
    if(wyborKomputera == "n"){
        komputerPelnaNazwa = "nożyce";
    }

    elementWynik = document.getElementById("wynik");
    let tekst = "";

    if(wynik == "p"){
        elementWynik.innerText = "Przegrywasz!";
        elementWynik.style.color = "#f2292c";
        przegrane++;
        document.getElementById("przegrane").innerText = `Przegrane: ${przegrane}`;
    }
    if(wynik == "r"){
        elementWynik.innerText = "Remis!";
        elementWynik.style.color = "#328dd3";
        remisy++;
        document.getElementById("remisy").innerText = `Remisy: ${remisy}`;
    }
    if(wynik == "w"){
        elementWynik.innerText = "Wygrywasz!";
        elementWynik.style.color = "#2ad33b";
        wygrane++;
        document.getElementById("wygrane").innerText = `Wygrane: ${wygrane}`;
    }

    document.getElementById("szczegoly").innerText = `Wybór gracza: ${graczPelnaNazwa}, wybór komputera: ${komputerPelnaNazwa}`;
}
// Funktion för "Change Bg" knappen. 
function change_bg()
{
    // Gör bakgrunds färgen på sidan till en variabel för att korta ner raden.
    let color = document.body.style.backgroundColor;

    // Ifall bakgrunden på sidan är en färg byter den till en annan. || = or operator. 
    if(color == "white" || color == "")
    {
        document.body.style.backgroundColor = "red";
    }
    else if(color == "red")
    {
        document.body.style.backgroundColor = "orange";
    }
    else
    {
        document.body.style.backgroundColor = "white";
    }
    
}

// Funktion för "Good vibes" knappen. 
function good_vibes()
{
    // För att korta ner. 
    let vibes = document.getElementById("vibes").style.display;

    // Ifall viber är lika med ingenting (för den börjar på det) eller är lika med none ändrar den display. 
    if(vibes == "" || vibes == "none")
    {
        // .getElementById för att att få objektet genom Id. 
        document.getElementById("vibes").style.display = "block";
    }
    else
    {
        document.getElementById("vibes").style.display = "none";
    }
}

// Funktion för "Time" knappen. 
function time()
{
    // Ger en variabel värdet Date() vilket är inbyggt i Js och kollar på din dators tid. 
    let date = Date();
    
    // Ändrar innehållet i h3 taggen med id "time" till datumet. 
    document.getElementById("time").innerHTML = date;

    // För att korta ner. 
    let time_display = document.getElementById("time").style.display;

    // För att ändra synlighet. 
    if(time_display == "none" || time_display == "")
    {
        document.getElementById("time").style.display = "block"
    }
    else
    {
        document.getElementById("time").style.display = "none"
    }
}

// Funktion för "Change picture" knappen.
function change_picture()
{
    // För att korta ner, .src tar källan från bilden. 
    let img = document.getElementById("image").src;

    // Ifall bildkällan slutar på "" byter den bildkällan. .endsWith kollar på slutet av pathen av vart bilden ligger på din dator
    if(img.endsWith("Hotpot_bear.png"))
    {
        document.getElementById("image").src = "Jasmina.png";
    }
    else if(img.endsWith("Jasmina.png")) 
    {
        document.getElementById("image").src = "Hotpot_bear.png";
    }

}

// Funktion för "Hide picture" knappen. 
function hide_picture()
{
    // Ändrar display
    document.getElementById("image").style.display = "none";
}

// Funktion för "Show picture" knappen.
function show_picture()
{
    // Ändrar display
    document.getElementById("image").style.display = "block";
}

// Funktion för "Header" knappen.
function header()
{
    // Ändrar på olika attributes på elementen. 

    // Ändrar bakgrundsfärg
    document.getElementById("header").style.backgroundColor = "gray";
    // Ändrar position till center
    document.getElementById("header").style.alignItems = "center";
    // Ändrar display
    document.getElementById("vibes").style.display = "block";
    // Ändrar färgen på texten
    document.getElementById("vibes").style.color = "white";
    // Ändrar display
    document.getElementById("time").style.display = "block";
    // Ändrar Datumet/tiden till den nuvarande
    document.getElementById("time").innerHTML = Date();
    // Ändrar färg på texten
    document.getElementById("time").style.color = "white";
    // Lägger till en border runt bilden
    document.getElementById("image").style.border = "1vw solid green";
}

// Funktion för "Remove Header" knappen.
function remove_header()
{
    // Ändrar allt till display = none
    document.getElementById("header").style.display = "none";
    document.getElementById("vibes").style.display = "none";
    document.getElementById("time").style.display = "none";
    document.getElementById("image").style.display = "none";
}

// Funktion för "Show header" knappen.
function show_header()
{
    // Ändrar allt till display = block
    document.getElementById("header").style.display = "flex";
    document.getElementById("vibes").style.display = "block";
    document.getElementById("time").style.display = "block";
    document.getElementById("image").style.display = "block";
    // Lägger till en text längst ner på sidan. 
    document.getElementById("thanks").innerHTML = "Thank you for visiting my website"
}

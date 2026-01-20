//variable global 
const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
let paires = [...emojis,...emojis]; 
let indexTab = []; //prends les deux elt à comparer 
let peutCliquer = true; 
let varPairesTrouvées = 0  ; 

afficher();

function afficher(){
    peutCliquer = true; 
    const gamebox = document.getElementById('gamebox'); 
    gamebox.innerHTML =""; 
    for(let i = 0 ; i < paires.length ; i++){
        
        gamebox.innerHTML += "<div class='card' id='card"+i+"' onclick='afficher_click("+i+")'> ? </div>";
    }
}


function afficher_click(i){
    //bloquer le l'affichage des emojis si 2 cartes déjà ouvert 
    if(!peutCliquer) return ; 

    //affiche les émojis suite au click 
    document.getElementById('card'+i).innerHTML = paires[i];
    if (indexTab.length < 2) {
        indexTab.push(i); 
        console.log(indexTab); 
        if(indexTab.length === 2)  {
            peutCliquer = false; 
            setTimeout(function(){
                verifier_paire(); 
            }, 2000);
           
        }
    } 
   
    
    
}


//verifier  les cartes sélectionner
function verifier_paire(){
    const elt1 = indexTab[0];  //10
    const elt2 = indexTab[1];  //11

    if(paires[elt1] === paires[elt2]) {
        //changer l'apparence des paires trouvées
        document.getElementById('card'+indexTab[0]).classList.add('matched'); 
        document.getElementById('card'+indexTab[1]).classList.add('matched'); 

       
        //remettre les cartes clickables 
        peutCliquer = true;
        
        pairesTrouvées(); 

        
    }else{
        retournerCarte(); 
        console.log("paire non identique"); 
    }

    indexTab = []; 

    
    


}

function retournerCarte(){
        peutCliquer = true; 
        document.getElementById('card'+indexTab[0]).innerHTML = "?" ; 
        document.getElementById('card'+indexTab[1]).innerHTML = "?" ; 
}
function initGame(){
    alert(" 😊 nouveau jeu! ") 
    afficher(); 
    let tab = []; 
}

function pairesTrouvées(){
    varPairesTrouvées = varPairesTrouvées +1; 
    let PairesTrouvées = document.getElementById('pairesTrouvées'); 
    PairesTrouvées.innerHTML= varPairesTrouvées ; 
    if(varPairesTrouvées == 8){
        alert(" Felicitation ! 🔥 Vous avez gagner 🏆 "); 
    }
}
    
    

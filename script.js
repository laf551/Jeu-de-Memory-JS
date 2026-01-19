//alert("helloword");  

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
const paires = [...emojis,...emojis]
 
function melanger(paires ){
   
    Math.floor(Math.random()*paires.length); 
    return 

}

//afficher les cartes 
function afficher_cacher(tmp){
    
    
    const gamebox = document.getElementById('gamebox'); 
    gamebox.innerHTML =""; 
    let c = tmp-1
    a = paires[c]; 
    
    
    
   // alert(paires[tmp-1]); 

    for(i = 0 ; i < paires.length ; i++){       
        
        
    }
    
    
    
}

function afficher(){
    const gamebox = document.getElementById('gamebox'); 
    gamebox.innerHTML =""; 
    for(i = 0 ; i < paires.length ; i++){
        
              
        
        gamebox.innerHTML += "<div class='card' id='card"+i+"' onclick='afficher_cacher(i)'> ? </div>";
    }
}


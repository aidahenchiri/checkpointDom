



var favs=Array.from(document.querySelectorAll(".fa-heart"))
var deletebtn=Array.from(document.querySelectorAll(".fa-trash"))
var plus=Array.from(document.querySelectorAll(".fa-circle-plus"))
var minus=Array.from(document.querySelectorAll(".fa-circle-minus"))
var total = document.querySelector(".totalprice")
console.log(total)

var cards=document.querySelectorAll(".wrapper")



for(let fav of favs){  
    
fav.addEventListener("click",function(){
    if(fav.style.color!="red")
    {
        fav.style.color ="red"
     }
     else{
        fav.style.color ="black"

     }
})}
for(let i in deletebtn){   /*  i est un indice*/ 

deletebtn[i].addEventListener("click",function(){
    cards[i].remove()

     })}


     for(let p of plus){  
        p.addEventListener("click",function(){
          p.nextElementSibling.innerHTML++;
          totalP();
  
        })
     }


     for(let q of minus){  
        q.addEventListener("click",function(){
         if ( q.previousElementSibling.innerHTML>0)
           {q.previousElementSibling.innerHTML-- ;
            totalP();
         }
        })
     }


     function totalP()
     {
      let qte=Array.from(document.querySelectorAll(".qte"))
      let price=Array.from(document.querySelectorAll(".price"))
      let t =0
 

      for (let i in qte)
      {t=t+qte[i].innerHTML*price[i].innerHTML

         
             }
console.log(t)
             document.querySelector(".totalprice").innerHTML= t
            }

    
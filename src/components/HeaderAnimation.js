import React from 'react'

export default function HeaderAnimation() {
    setTimeout(()=>{
        let header=document.getElementById('appHeader');
        let logo=document.getElementById('logoImg');
       if(header){
        window.addEventListener('scroll',()=>{
            if(window.scrollY >= 70){
                header.style.top="0px";
                logo.style.height="38px";
                logo.style.width="180px"
            }else{
                header.style.top="-84px"
                logo.style.height="43px";
                logo.style.width="192px"
            }
        })
       }
      },500)
  return (
    <div>
      
    </div>
  )
}

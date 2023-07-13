for(let i=0;i<4;i++) {
  const langTosw = document.getElementById(`lang-sw-${i+1}`);
  langTosw.addEventListener("click",() => sessionStorage.setItem("activated-lang",langTosw.getAttribute("data-trans")));
}
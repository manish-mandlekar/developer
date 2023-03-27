
function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
    let spanParent = document.createElement('span');
    let spanChild = document.createElement('span');


    spanParent.classList.add('parent');
    spanChild.classList.add('child');

    spanChild.innerHTML = elem.innerHTML;
    spanParent.appendChild(spanChild);

    elem.innerHTML = '';
    elem.appendChild(spanParent);
})
}

function loaderAnimation (){
    var tl = gsap.timeline();
 

tl.from(".child span",{
    x:200,
    stagger : .2,
    duration:1.3,
    ease : Power3.easeInOut,
})
.to('.parent .child',{
    y : "-100%",
    duration: 1,
    ease : Circ.easeInOut,
})
.to('#loader',{
   height: 0,
    duration: 1,
    ease : Circ.easeInOut,
})
.to('#green',{
    height:"100%",
    duration: .8,
    delay:-.6,
    top:0,
    ease : Circ.easeInOut,
})
.to('#green',{
    height: 0,
    duration: 1,
    top:0,
    delay:-.1,
    ease : Circ.easeInOut,
})
}

revealToSpan();
loaderAnimation();

gsap.from('g path',{
    strokeDasharray: 64.68521881103516,
    strokeOffset: 64.68521881103516,
    duration:1,
    ease : Power3,

})



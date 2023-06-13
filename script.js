var active = 3

var mnCircles = document.querySelectorAll(".mnCircle")
var second = document.querySelectorAll(".second")

gsap.to(mnCircles[active-1],{
opacity:.7
})

gsap.to(second[active-1],{
    opacity:.7
    })

mnCircles.forEach(function(val,index){
    val.addEventListener("click",function(){
        gsap.to(".circle",{
            rotate:(3-(index+1))*10,
            ease:Expo.easeInOut,
            duration:1
        })
        greyout()
        gsap.to(this,{
            opacity:.5
        })
        gsap.to(second[index],{
            opacity:1
        })
    })
})

function greyout(){
    gsap.to(mnCircles,{
        opacity:0.08
    })
    gsap.to(second,{
        opacity:.2
    })
}

gsap.to(".circle",{
    rotate:0,
    ease:Expo.easeInOut,
    duration:2
})
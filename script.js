gsap.to(".imagecontainer",{
    width : "100%" ,
    ease : Expo.easeInOut ,
    duration :2 ,
    stagger : 2.1
})

gsap.to(".text-heading h1",{
    ease : Expo.easeInOut ,
    stagger : 2.1 ,
    top : 0

})
gsap.to(".text-heading h1",{
    delay : 2 ,
    ease : Expo.easeInOut ,
    stagger : 2.1 ,
    top : "-100%"

})

gsap.to(".text-para p",{
    ease :Expo.easeInOut ,
    stagger : 2.1 ,
    top :0 
})
gsap.to(".text-para p",{
    delay : 2 ,
    ease :Expo.easeInOut ,
    stagger : 2.1 ,
    top :"-100%"
})

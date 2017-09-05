window.addEventListener("load", ()=>{
    const elementMyUniqueId=document.getElementById("myUniqueId") 

    let allElementsWithHighlightGreen=document.getElementsByClassName("highlightGreen")
    const allElementsWithTagNameDiv=document.getElementsByTagName("div")

    const myArray=[]
    myArray.push("hello")

    console.log(elementMyUniqueId)
    console.log(allElementsWithHighlightGreen)
    console.log(allElementsWithTagNameDiv)

    elementMyUniqueId.innerHTML="Blue Text"
    console.log(elementMyUniqueId.getAttribute("class"))
    elementMyUniqueId.setAttribute("class", "highlightGreen")
        const onClick=()=>{
        for(let i=0; i<allElementsWithTagNameDiv.length; ++i){
            allElementsWithTagNameDiv[i].setAttribute("class", "highlightGreen")
        }
    }
    const myImages=document.getElementsByTagName("img")
    for(let i=0; i<myImages.length;++i){
        myImages[i].addEventListener("click", onClick)
    }
})
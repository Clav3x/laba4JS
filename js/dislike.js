function bucketd(){
    let element_like, style_like, element_dislike, style_dislike, element_dislikeon, element_likeon, style_dislikeon, style_likeon;
    element_like=document.querySelector("#like");
    style_like=window.getComputedStyle(element_like);
    element_dislike=document.querySelector("#dislike");
    style_dislike=window.getComputedStyle(element_dislike);
    element_dislikeon=document.querySelector("#dislikeon");
    style_dislikeon=window.getComputedStyle(element_dislikeon);
    element_likeon=document.querySelector("#likeon");
    style_likeon=window.getComputedStyle(element_likeon);
    if (style_like.display==="block" && style_dislike.display==="block"){
        element_dislike.style.display="none";
        element_dislikeon.style.display="block";
    } else if (style_likeon.display==="block" && style_dislike.display==="block"){
        element_dislike.style.display="none";
        element_dislikeon.style.display="block";
        element_likeon.style.display="none";
        element_like.style.display="block";
    } else if (style_dislikeon.display==="block" && style_like.display==="block"){
        element_dislikeon.style.display="none";
        element_dislike.style.display="block";
    }
}
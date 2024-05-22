function openMain(){
    
    console.log("chamou openMain");
    document.querySelector("body > main > header > nav").style.display = "flex";

}
function closeMain(){
    document.querySelector("body > main > header > nav").style.display = "none";
    location.reload();
}
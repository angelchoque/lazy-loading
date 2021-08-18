let totalImages = 0;
let loadedImages = 0;

const isIntersecting = (entry)=>{
    return entry.isIntersecting
}
const loadImage =(entry)=>{
    const nodo = entry.target
    nodo.src = nodo.dataset.src
    nodo.onload = ()=>{
        loadedImages += 1;
        logState();
    }
    observer.unobserve(nodo)
}
const observer = new IntersectionObserver((entries)=>{
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = images =>{
    observer.observe(images)
    totalImages += 1;
    logState();
}
function logState() {
    console.log(`⚪️ Total Imágenes: ${totalImages}`);
    console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
}
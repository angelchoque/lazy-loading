import {registerImage} from "./lazy.js";


const getImage = document.querySelector('#getImage')
const URL = "https://randomfox.ca/floof/"

const getImageApi = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    return data.image;
  }

const createNodeImage = async()=>{
    const container = document.createElement('figure')
    container.className = 'rounded-md bg-gray-300 w-auto'

    const foximage = document.createElement('img')
    foximage.className = 'mx-auto rounded'
    foximage.width = '320'
    foximage.dataset.src = await getImageApi()

    container.appendChild(foximage)
    app.append(container)
    registerImage(foximage)
}
const app = document.querySelector('#app')
getImage.addEventListener('click', createNodeImage)


const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
  app.innerHTML = "";
});

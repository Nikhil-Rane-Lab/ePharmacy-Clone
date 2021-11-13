import { structureTop} from '../component/outerStructure/structure.js';

let topStructure = document.querySelector('.structureTop');
topStructure.innerHTML = structureTop();

let search = 
async function showCharacter() {
    let res = await fetch(`http://localhost:8080/product`)
    let data = await res.json()
    console.log('data:', data)
    array.forEach(element => {
        if(element = search){
            
        }
    });

}

showCharacter()


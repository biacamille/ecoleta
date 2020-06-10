function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {

            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}

populateUFs()


function getCities(event) {

    const citySelect = document.querySelector("select[name=city]")
    const stateinput = document.querySelector("input[name=state]")

    console.log(event.target.value)

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateinput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {


            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false
        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)



//*Itens de coleta
//*Todos os li´s
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItems)
}

const collectedItems = document.querySelector("input [name=items]")



let selectItems = []
let selectedItems = []

function handleSelectedItems(event) {
    
    const itemLi = event.target

    //*adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id
    
    //verificar se existem itens selecionados, se sim
    // pegar os itens selecionados
    const alreadyselected = selectItems.findIndex(item => {
        const itemFound = item == itemId // isso será true ou false
        return itemFound
    })
    console.log(alreadyselected)
    //se já estiver selecionado, 
    if (alreadyselected >= 0) {
        //tirar da seleçao
        const filteredItems = selectItems.filter(item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })

        selectedItems = filteredItems

    } else {

        //se não estiver selecionado, 
        //adicionar à seleçao
        selectedItems.push(itemId)
    }
    console.log('selectedItems: --->', selectedItems)

    //atualizar o campo escondisdo com os itens selecionados
    collectedItems.value = selectedItems

}
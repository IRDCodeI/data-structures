// Exports
import animationElement from './animations.js'

// DOM Elements
const $sectionElements = document.getElementById("sec-render-elements")
const $indexConnection = document.getElementById('conn')

// Functional services
const addIndexElement = (number) => {

    const $indexElement = document.createElement('div')
    const $indexElementData = document.createElement('span')
    const $valueIndex = document.createTextNode(number)

    $indexElementData.classList.add('index-content')
    $indexElementData.append($valueIndex)    
    $indexElement.appendChild($indexElementData)
    $indexElement.classList.add('el-index')

    let newElConn = $indexConnection.cloneNode(true)

    $sectionElements.appendChild(newElConn)
    $sectionElements.appendChild($indexElement)

}

const removeIndexElement = () => {
    $sectionElements.removeChild($sectionElements.lastChild)
    $sectionElements.removeChild($sectionElements.lastChild)
}

// Validations data
const checkValue = (value)=> {
    if(value == ''){
        return false
    }else{
        return true
    }
}

// Events Handler
document.addEventListener('click', (e) => {
    if(e.target.matches('.btn_push')){
        document.querySelector('.error-msg').style.setProperty('display','none')

        let valueInputPush = document.getElementById('input-data-push').value

        if(checkValue(valueInputPush) == true){
            addIndexElement(valueInputPush)    
        }else {
            document.querySelector('.error-msg').style.setProperty('display','inline-block')
        }
        
    }else if(e.target.matches('.btn_pop')){
        removeIndexElement()
    }
})

animationElement()
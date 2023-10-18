
function subscribe(button){
    // 'this' in JS will yield the exact same as the document.querySelector()
    
    // https://devdocs.io/javascript/operators/strict_equality
    if (button.innerHTML === 'Subscribe'){
        button.innerHTML = 'Subscribed';
    } else {
        button.innerHTML = 'Subscribe'
    }

}
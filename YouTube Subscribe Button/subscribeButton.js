
function subscribe(button){
    // 'this' in JS will yield the exact same as the document.querySelector()
    
    // https://devdocs.io/javascript/operators/strict_equality
    if (button.innerHTML === 'Subscribe'){
        button.classList.add('is-subscribed');
        
        button.innerHTML = 'Subscribed';
    } else {
        button.classList.remove('is-subscribed')
        button.innerHTML = 'Subscribe'
    }

}
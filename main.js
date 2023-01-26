// Initializing The Variables

const result = document.getElementById('result');
const button = Array.from(document.getElementsByClassName('btn'));
const head = document.getElementById('head');
const selectors = Array.from(document.getElementsByClassName('selector'))
let resultValue = "";

button.forEach(button => {
    button.addEventListener('click', (e) => {
    if(e.target.innerText == '='){
        try{

            resultValue = eval(result.innerText);
            result.innerText = resultValue
            resultValue = ""
        }
        catch {
            result.innerText = "Math Error"
            resultValue = ""
            
        }

    }
        else if(e.target.innerText== 'C'){
            resultValue = ""
            result.innerText = resultValue;
    
        }
        else if (e.target.innerText == "🠔"){
            resultValue = resultValue.slice(0, resultValue.length-1);
            result.innerText = resultValue
        }
        else {
            
            resultValue += e.target.innerText;
            result.innerText = resultValue
        }


    })
})

selectors.forEach(selector => {
    selector.addEventListener('click', () => {
        if(selector == selectors[0]){
            head.href="css/sheet1.css"
            selectors.forEach(e => {
                e.classList.remove('active');
            })
            selector.classList.toggle('active');
        }
        if(selector == selectors[1]){
            head.href="css/sheet2.css"
            selectors.forEach(e => {
                e.classList.remove('active');
            })
            selector.classList.toggle('active');
        }
        if(selector == selectors[2]){
            head.href="css/sheet3.css";
            selectors.forEach(e => {
                e.classList.remove('active');
            })
            selector.classList.toggle('active');
        }
    })
})


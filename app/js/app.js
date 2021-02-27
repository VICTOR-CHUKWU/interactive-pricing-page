const numberView = document.querySelector(".number");
const rangeValue = document.querySelector("#range");
const priceValue = document.querySelector(".price");
const checkbox = document.querySelector("#checkbox");
const discount = document.querySelector(".discount");


// function to display discount when yearly billing is clicked
checkbox.addEventListener('change', function(){
    discount.classList.toggle('discount-display');
})

// to get the number view and range value work together
rangeValue.addEventListener('input', sameRange);
numberView.addEventListener('input', sameRange);

function sameRange(e){
    let priceInput = e.target.value;
    console.log(priceInput);
    rangeValue.value = priceInput;
    numberView.value = priceInput;
    numberView.innerHTML = priceInput;
    if(numberView.value <= 10){
        priceValue.innerHTML = '8.00';
    }else if(priceInput < 100){
        priceValue.innerHTML = '12.00';
    }else if(priceInput < 500){
        priceValue.innerHTML = '16.00';
    }else if(priceInput < 1000){
        priceValue.innerHTML = '24.00';
    }else if(priceInput == 1000){
        priceValue.innerHTML = '36.00';
        numberView.innerHTML = '1'
        document.querySelector('.number-text').innerHTML = 'm';
    }
     
    if(discount.classList.contains('discount-display')){
        let mainPrice = priceValue.innerHTML.toString();
        console.log(mainPrice)
        let me = parseFloat(mainPrice) * 0.75;
        priceValue.innerHTML = me;
    }
    
    

}

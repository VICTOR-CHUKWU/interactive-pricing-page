const numberView = document.querySelector(".number");
const rangeValue = document.querySelector("#range");
const priceValue = document.querySelectorAll(".price");
const checkbox = document.querySelector("#checkbox");
const discount = document.querySelector(".discount");
const numberText = document.querySelector('.number-text');


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
            priceValue.forEach((item)=>{ item.innerHTML = '8.00';
            numberText.innerHTML = 'k'; 
        })
        }else if(priceInput < 100){
            priceValue.forEach((item)=>{ item.innerHTML = '12.00';
            numberText.innerHTML = 'k'; })
        }else if(priceInput < 500){
            priceValue.forEach((item)=>{ item.innerHTML = '16.00';
            numberText.innerHTML = 'k'; })
        }else if(priceInput < 1000){
            priceValue.forEach((item)=>{ item.innerHTML = '24.00';
            numberText.innerHTML = 'k'; })
        }else if(priceInput >= 1000){
            priceValue.forEach((item)=>{ item.innerHTML = '36.00';
            if(item.innerHTML == 36.00 || item.innerHTML == 27 ){
                numberView.innerHTML = '1'
                numberText.innerHTML = 'm'; 
            }
        })
            
        }
     
    if(discount.classList.contains('discount-display')){
        priceValue.forEach((items)=>{
            let mainprice = items.innerHTML.toString();
            let me = parseFloat(mainprice) * 0.75;
            items.innerHTML = me;
        })
    }
    
    

}

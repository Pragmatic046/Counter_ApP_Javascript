//Initial count
let count = 0;

// select value and buttons
const digits = document.querySelector('.digits');
const btns = document.querySelectorAll('.btn');
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        //'.classList' is the object having detail of targeted element
        const styles = e.currentTarget.classList
        if (styles.contains('dec')) { //'.contains' checks if 'styles' contains 'dec'
            count--; // Decrementing count
        }
        else if (styles.contains('inc')) {//'.contains' checks if 'styles' contains 'inc'
            count++; // Incrementing count
        }
        else {
            count = 0; //Reset to zero
        }
        if(count > 0){
            digits.style.color = 'dodgerblue'
        }
        if(count < 0){
            digits.style.color = 'red'
        }
        if(count === 0){
            digits.style.color = 'black'
        }

        digits.textContent = count; // Change the content of '.digits' element
    })
})


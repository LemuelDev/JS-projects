const numberResult = document.querySelector('#numberResult');
 const addBtn = document.querySelector('#plusOne');
 const resetBtn = document.querySelector('#reset');
const minusBtn = document.querySelector('#minusOne');
const messagebox = document.querySelector('.messagebox');
         
const counter = {
         count: 0,
         message: ''
   }
   numberResult.innerHTML = counter.count
      function addOne () {
               counter.count++
             numberResult.innerHTML =  counter.count
              messagebox.innerHTML = `Addingg....`;
       }
     function minus() {
            counter.count--
            numberResult.innerHTML = counter.count
            messagebox.innerHTML = `Subtracting....`;
      }
   function resetCount() {
        counter.count = 0
        numberResult.innerHTML = counter.count;
        messagebox.innerHTML = `Reseted.`;
   }

addBtn.addEventListener('click', addOne)
 minusBtn.addEventListener('click', minus)
 resetBtn.addEventListener('click', resetCount)
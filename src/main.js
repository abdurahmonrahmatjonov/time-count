const countVal = document.querySelector (".count-val");
const timeVal = document.querySelector(".time-val");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const plusP = document.querySelector(".p_1");
const minusP = document.querySelector(".p_2");


plus.addEventListener("click", () => {
	if (countVal.value !== "") {
  if (timeVal.value === "") {
		countVal.value = +countVal.value + 1;
		plusP.innerText = "";
  minusP.innerText = "";
  }
  else{
   setTimeout(() => {
    countVal.value = +countVal.value + 1;
    plusP.innerText = "";
    minusP.innerText = "";
   }, +timeVal.value);
  }
	} else {
		plusP.innerText = "Enter count";
	}
});

minus.addEventListener("click", () => {
	if (countVal.value !== "") {
  if (timeVal.value === "") {
   countVal.value = +countVal.value - 1;
   plusP.innerText = "";
   minusP.innerText = "";
   }
   else{
    setTimeout(() => {
     countVal.value = +countVal.value - 1;
     plusP.innerText = "";
     minusP.innerText = "";
    }, +timeVal.value);
   }
	} else {
		minusP.innerText = "Enter count";
	}
});



console.log('My second pushshed code');

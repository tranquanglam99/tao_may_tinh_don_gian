var items = Array.from(document.querySelectorAll(".item"));
items.forEach(function(btn) {
    btn.addEventListener("click", clickFunction);
    function clickFunction() {
        var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var result;
        a = parseInt(a);
        b = parseInt(b);
        if (btn.innerHTML == "Addition(+)") {
            result = a + b;
            document.getElementById("display").value = result;
        }
        if (btn.innerHTML == "Subtraction(-)") {
            result = a - b;
            document.getElementById("display").value = result;
        }
        if (btn.innerHTML == "Multiplication(x)") {
            result = a * b;
            document.getElementById("display").value = result;
        }
        if (btn.innerHTML == "Division(/)") {
            result = a / b;
            document.getElementById("display").value = result;
        }
    }
                    
})
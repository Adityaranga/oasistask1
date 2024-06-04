(function() {
    let screen1 = document.querySelector('.screen-1');
    let screen2 = document.querySelector('.screen-2');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let ans = document.querySelector('.btn-ans');
    let dele = document.querySelector('.btn-del');
    let sqrt = document.querySelector('.btn-sqrt');

    ans.addEventListener('click', function() {
        if (screen1.value === '') {
            screen2.value = "";
        } else {
            try {
                let expression = screen1.value.replace(/√(\d+)/g, function(match, number) {
                    return `Math.sqrt(${number})`;
                });
                let answer = eval(expression);
                screen2.value = answer;
            } catch (error) {
                screen2.value = "Error";
            }
        }
    });

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen1.value += value;
        });
    });

    equal.addEventListener('click', function() {
        if (screen1.value === '') {
            screen2.value = "";
        } else {
            try {
                let expression = screen1.value.replace(/√(\d+)/g, function(match, number) {
                    return `Math.sqrt(${number})`;
                });
                let answer = eval(expression);
                screen2.value = answer;
            } catch (error) {
                screen2.value = "Error";
            }
        }
    });

    clear.addEventListener('click', function() {
        screen1.value = "";
        screen2.value = "";
    });

    dele.addEventListener('click', function() {
        screen1.value = screen1.value.slice(0, -1);
    });


})();

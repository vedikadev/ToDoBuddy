const input = document.getElementById("enterTask");
const arr = localStorage.getItem('arr');
let taskArr;
let count = 0;
if (JSON.parse(arr) !== null) {
    taskArr = JSON.parse(arr);
} else {
    taskArr = [];
}
list();
input.addEventListener('keyup', function (event) {
    if (event.key !== 'Enter') {
        return;
    }
    if (input.value == "") {
        return;
    }
    const li = document.createElement('li');
    const span = document.createElement('span');
    const div = document.createElement('div');
    const inp = document.createElement('input');
    const button = document.createElement('button');
    const ul = document.querySelector("ul");


    inp.type = "checkbox";
    inp.className = "check";
    button.innerText = "X";
    button.className = "btn";
    div.append(inp, button);
    span.innerText = input.value;
    li.append(span, div);
    li.className = "li-item";
    ul.append(li);
    input.value = "";

    let obj = {};
    obj.text = span.innerText;
    obj.check = false;
    button.addEventListener('click', function () {
        const i = taskArr.indexOf(obj)
        console.log(i);
        taskArr.splice(i, 1);
        localStorage.setItem('arr', JSON.stringify(taskArr));
        li.parentElement.removeChild(li);
    });

    inp.addEventListener('change', function () {
        if (inp.checked) {
            span.style.textDecoration = "line-through";
            obj.check = true;
        } else {
            span.style.textDecoration = "";
            obj.check = false;
        }
        localStorage.setItem('arr', JSON.stringify(taskArr));
    })

    taskArr.push(obj);
    console.log(taskArr);
    localStorage.setItem('arr', JSON.stringify(taskArr));

});
function list() {
    const ul = document.querySelector("ul");
    taskArr.forEach(function (e) {

        const li = document.createElement('li');
        const span = document.createElement('span');
        const div = document.createElement('div');
        const inp = document.createElement('input');
        const button = document.createElement('button');
        const ul = document.querySelector("ul");

        inp.type = "checkbox";
        inp.className = "check";
        button.innerText = "X";
        button.className = "btn";
        div.append(inp, button);
        span.innerText = e.text;
        li.append(span, div);
        li.className = "li-item";
        ul.append(li);

        if (e.check) {
            inp.checked = true;
            span.style.textDecoration = "line-through";
        }
        button.addEventListener('click', function () {
            const i = taskArr.indexOf(e)
            console.log(i);
            taskArr.splice(i, 1);
            localStorage.setItem('arr', JSON.stringify(taskArr));
            li.parentElement.removeChild(li);
        });

        inp.addEventListener('change', function () {
            if (inp.checked) {
                span.style.textDecoration = "line-through";
                e.check = true;

            } else {
                span.style.textDecoration = "";
                e.check = false;
            }
            localStorage.setItem('arr', JSON.stringify(taskArr));
        })

    });
}

document.getElementById('clear').addEventListener('click', function () {
    localStorage.clear();
    taskArr = [];

    const ul = document.querySelector("ul");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
});

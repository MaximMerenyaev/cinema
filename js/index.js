let checkNode = document.querySelector(`#check`);
let sto = document.querySelector(`#stoimost`);
let form1 = document.querySelector(`#form`);
let a = document.querySelector(`#a`);
let b = document.querySelector(`#b`);
let c = document.querySelector(`#c`);
let d = document.querySelector(`#d`);
let e = document.querySelector(`#e`);
let f = document.querySelector(`#f`);
let g = document.querySelector(`#g`);
let h = document.querySelector(`#h`);
let i = document.querySelector(`#i`);
let j = document.querySelector(`#j`);
let k = document.querySelector(`#k`);
let l = document.querySelector(`#l`);

let cost = 0;
let aa = true;
let bb = true;
let cc = true;
let dd = true;
let ee = true;
let ff = true;
let gg = true;
let hh = true;
let ii = true;
let jj = true;
let kk = true;
let ll = true;

function restart() {
    cost = 0;
    sto.innerHTML = cost;
    a.classList.remove("color");
    aa = true;
    b.classList.remove("color");
    bb = true;
    c.classList.remove("color");
    cc = true;
    d.classList.remove("color");
    dd = true;
    e.classList.remove("color");
    ee = true;
    f.classList.remove("color");
    ff = true;
    g.classList.remove("color");
    gg = true;
    h.classList.remove("color");
    hh = true;
    i.classList.remove("color");
    ii = true;
    j.classList.remove("color");
    jj = true;
    k.classList.remove("color");
    kk = true;
    l.classList.remove("color");
    ll = true;
}

// Клик по кнопкам с буквами
a.addEventListener(`click`, function () {
    if (aa) {
        a.classList.add("color");
        cost += 600;
        aa = false;
        console.log(cost);
        sto.innerHTML = cost;
    } else {
        a.classList.remove("color");
        cost -= 600;
        aa = true;
        console.log(cost);
        sto.innerHTML = cost;
    }
});
b.addEventListener(`click`, function () {
    if (bb) {
        b.classList.add("color");
        cost += 600;
        bb = false;
        console.log(cost);
        sto.innerHTML = cost;
    } else {
        b.classList.remove("color");
        cost -= 600;
        bb = true;
        console.log(cost);
        sto.innerHTML = cost;
    }
});
c.addEventListener(`click`, function () {
    if (cc) {
        c.classList.add("color");
        cost += 600;
        cc = false;
        console.log(cost);
        sto.innerHTML = cost;
    } else {
        c.classList.remove("color");
        cost -= 600;
        cc = true;
        console.log(cost);
        sto.innerHTML = cost;
    }
});
d.addEventListener(`click`, function () {
    if (dd) {
        d.classList.add("color");
        cost += 600;
        dd = false;
        console.log(cost);
        sto.innerHTML = cost;
    } else {
        d.classList.remove("color");
        cost -= 600;
        dd = true;
        console.log(cost);
        sto.innerHTML = cost;
    }
});
e.addEventListener(`click`, function () {
    if (ee) {
        e.classList.add("color");
        cost += 500;
        ee = false;
        console.log(cost);
        sto.innerHTML = cost;
    } else {
        e.classList.remove("color");
        cost -= 500;
        ee = true;
        console.log(cost);
        sto.innerHTML = cost;
    }
});
f.addEventListener(`click`, function () {
    if (ff) {
        f.classList.add("color");
        cost += 500;
        ff = false;
        console.log(cost);
        sto.innerHTML = cost;
    } else {
        f.classList.remove("color");
        cost -= 500;
        ff = true;
        console.log(cost);
        sto.innerHTML = cost;
    }
});
g.addEventListener(`click`, function () {
    if (gg) {
        g.classList.add("color");
        cost += 500;
        gg = false;
        console.log(cost);
        sto.innerHTML = cost;
    } else {
        g.classList.remove("color");
        cost -= 500;
        gg = true;
        console.log(cost);
        sto.innerHTML = cost;
    }
});
h.addEventListener(`click`, function () {
    if (hh) {
        h.classList.add("color");
        cost += 500;
        hh = false;
        console.log(cost);
        sto.innerHTML = cost;
    } else {
        h.classList.remove("color");
        cost -= 500;
        hh = true;
        console.log(cost);
        sto.innerHTML = cost;
    }
});
i.addEventListener(`click`, function () {
    if (ii) {
        i.classList.add("color");
        cost += 400;
        ii = false;
        console.log(cost);
        sto.innerHTML = cost;
    } else {
        i.classList.remove("color");
        cost -= 400;
        ii = true;
        console.log(cost);
        sto.innerHTML = cost;
    }
});
j.addEventListener(`click`, function () {
    if (jj) {
        j.classList.add("color");
        cost += 400;
        jj = false;
        console.log(cost);
        sto.innerHTML = cost;
    } else {
        j.classList.remove("color");
        cost -= 400;
        jj = true;
        console.log(cost);
        sto.innerHTML = cost;
    }
});
k.addEventListener(`click`, function () {
    if (kk) {
        k.classList.add("color");
        cost += 400;
        kk = false;
        console.log(cost);
        sto.innerHTML = cost;
    } else {
        k.classList.remove("color");
        cost -= 400;
        kk = true;
        console.log(cost);
        sto.innerHTML = cost;
    }
});
l.addEventListener(`click`, function () {
    if (ll) {
        l.classList.add("color");
        cost += 400;
        ll = false;
        console.log(cost);
        sto.innerHTML = cost;
    } else {
        l.classList.remove("color");
        cost -= 400;
        ll = true;
        console.log(cost);
        sto.innerHTML = cost;
    }
});

let aaa = true;

checkNode.addEventListener('click', ()=>{
    if (cost != 0) {
        form1.classList.toggle("noShow");
        if (aaa) {
            aaa = false;
        } else {
            aaa = true;
            restart();
        }
    } else {
        alert("Места не выбраны!");
    }
})
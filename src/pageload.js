const pageLoad = () => {
    let content = document.getElementById('content');

    let h1 = document.createElement('h1');
    let input = document.createElement('input');
    let button = document.createElement('button');
    let button2 = document.createElement('button');
    let button3 = document.createElement('button');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');
    let div5 = document.createElement('div');
    let div6 = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let p7 = document.createElement('p');
    let p8 = document.createElement('p');

    h1.textContent = "Weather-app";
    button.textContent = "SHOW ME THE WEATHER!";
    button2.textContent = "°C";
    button3.textContent = "CLEAR";
    div4.textContent = "LOADING...";
    button2.setAttribute('data', 'toggle');
    button3.setAttribute('data', 'cancel');
    button2.classList.add('hidden');
    button3.classList.add('hidden', 'clear');
    p1.setAttribute('data', 'name');
    p2.setAttribute('data', 'description');
    p3.setAttribute('data', 'temperature');
    p4.setAttribute('data', 'humidity');
    p5.setAttribute('data', 'feels-like');
    p6.setAttribute('data', 'temp-symbol');
    p7.setAttribute('data', 'feels-label');
    p8.setAttribute('data', 'feels-symbol');
    p1.classList.add('data');
    p2.classList.add('data');
    p3.classList.add('data');
    p4.classList.add('data');
    p5.classList.add('data');
    p6.classList.add('data');
    p7.classList.add('data');
    p8.classList.add('data');
    div2.classList.add('hidden', 'data-box');
    div3.classList.add('temp-box');
    div4.classList.add('loading');
    div5.classList.add('flex');
    div6.classList.add('flex');

    div1.appendChild(h1);
    div1.appendChild(input);
    div1.appendChild(button);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div5.appendChild(p3);
    div5.appendChild(p6);
    div2.appendChild(div5);
    div2.appendChild(p4);
    div6.appendChild(p7);
    div6.appendChild(p5);
    div6.appendChild(p8);
    div2.appendChild(div6);
    div3.appendChild(button2);
    div3.appendChild(button3);
    div2.appendChild(div3);
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div4);
}

export { pageLoad }
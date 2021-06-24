const pageLoad = () => {

    let content = document.getElementById('content');

    let h1 = document.createElement('h1');
    let input = document.createElement('input');
    let button = document.createElement('button');
    let button2 = document.createElement('button');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    h1.textContent = "Weather-app";
    button.textContent = "SHOW ME THE WEATHER!";
    button2.textContent = "°C";
    button2.setAttribute('data', 'toggle');
    button2.classList.add('hidden');
    p1.setAttribute('data', 'name');
    p2.setAttribute('data', 'description');
    p3.setAttribute('data', 'temperature');
    p1.classList.add('data');
    p2.classList.add('data');
    p3.classList.add('data');
    div2.classList.add('data-box');
    div3.classList.add('temp-box');

    div1.appendChild(h1);
    div1.appendChild(input);
    div1.appendChild(button);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div3.appendChild(p3);
    div3.appendChild(button2);
    div2.appendChild(div3);
    content.appendChild(div1);
    content.appendChild(div2);
}

export { pageLoad }
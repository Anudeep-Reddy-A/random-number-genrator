const btn = document.getElementById('btn');
const lab = document.getElementById('label');
let n;

btn.onclick = function() {
    const minn = Number(document.getElementById('minn').value);
    const maxx = Number(document.getElementById('maxx').value);
    if(minn == null || maxx == null)
    {
        lab.textContent = 'Please enter values';
    }
    if(maxx<=minn)
    {
        lab.textContent = 'Min should be less than Max';
    }

    else
    {
        n=Number(Math.floor(Math.random()*(maxx-minn)+1)+minn);
        lab.textContent = `Random Number: ${n}`;  
    }
}
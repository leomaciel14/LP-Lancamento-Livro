
document.getElementById('linkKits').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('kits').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('linkOndeComprar').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('onde-comprar').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('linkFaleComigo').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('fale-comigo').scrollIntoView({
        behavior: 'smooth'
    });
});
/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = 'https://platzi-avo.vercel.app';

const appNode = document.querySelector('#app');

//intl: para dar formato a fechas y monedas

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price)
    return newPrice;
}

appNode.addEventListener('click', (evento) => {
    if (evento.target.nodeName === 'H2') {
        window.alert('Hola')
    }
})

//conectarnos al servidor
window
    .fetch(`${baseUrl}/api/avo`)
    //procesar la respuesta, convertirla a JSON
    .then((respuesta) => respuesta.json())
    // JSON a Data y renderizar.info.browser
    .then((respuestaJSON) =>{
        const todosLosItems = []
        respuestaJSON.data.forEach((item) => {
            const imagen = document.createElement('img');
            imagen.src = `${baseUrl}${item.image}`;

            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className = 'text-2xl text-blue-800'

            const price = document.createElement('div');
            price.textContent = formatPrice(item.price);

            const container = document.createElement('div');
            container.append(imagen, title, price);

            todosLosItems.push(container)
        });
        appNode.append(...todosLosItems);
    })

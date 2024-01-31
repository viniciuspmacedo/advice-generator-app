async function getDataFromApi() {
    try {
        showloading()
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();

        if (data.erro) {
            throw Error("Houve um erro");
        }

        fillElements(data);
        hideLoading()
        return data

    } catch (erro) {
        return erro;
    }

}

function fillElements(data) {
    adviceIdElement.innerText = data['slip'].id;
    adviceElement.innerText = `"${data['slip'].advice}"`;

}
function showloading() {
    const loadElement = document.createElement('div');
    const messageElement = document.createElement('div');
    loadElement.classList.add('loading')
    messageElement.classList.add('loader')

    console.log(messageElement)

    loadElement.appendChild(messageElement);
    document.body.appendChild(loadElement)
}

function hideLoading() {
    const loadElement = document.querySelector('.loading');
    console.log(loadElement)
    loadElement.remove()
}

const btnGetData = document.querySelector('button');
const adviceIdElement = document.getElementById('advice-id');
const adviceElement = document.getElementById('advice');

btnGetData.addEventListener('click', () => {
    getDataFromApi()
});

getDataFromApi();


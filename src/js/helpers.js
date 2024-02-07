export const createGenericContainer = (subContainerClass, h2Title, h2AdditionalClass)=> {
    const mainContainer = document.createElement('div');
    mainContainer.id = 'mainContainer';
    mainContainer.classList.add('overlay');
    mainContainer.innerHTML = `
    <article id="subContainer" class="${subContainerClass}">
        <span id="subContainer__cross" class="closing-cross closing-cross--banner">x</span>
        <h2 id="subContainer__title" class="blue-banner ${h2AdditionalClass}">${h2Title}</h2>
    </article>
    `
    document.getElementById('page-container').appendChild(mainContainer);
    document.getElementById('subContainer__cross').addEventListener('click', ()=> {
        mainContainer.remove();
    })
    return mainContainer.querySelector('#subContainer');
}

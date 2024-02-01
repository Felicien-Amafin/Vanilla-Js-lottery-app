export class Navigation {
    static clickListenerHandler(string1, string2) {
        this.addClickListener(string1, string2);
        this.addClickListener(string2, string1);
    }
    static addClickListener(string1, string2) {
        const el1 = document.getElementById(`${string1}-nav`); 
        const el2 = document.getElementById(`${string2}-nav`); 
        el1.addEventListener('click', ()=>{
            if(el2.classList.contains('selected')) {
                el2.classList.remove('selected');
                el1.classList.add('selected');
                document.getElementById(`${string1}`).classList.toggle('none');
                document.getElementById(`${string2}`).classList.toggle('none');
            }
        })
        if(string1 === 'last-results') {}
    }
}
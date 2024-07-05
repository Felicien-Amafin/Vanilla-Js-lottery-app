export class Navigation {
    static clickListenerHandler(id1, id2) {
        this.addClickListener(id1, id2);
        this.addClickListener(id2, id1);
    }
    static addClickListener(str1, str2) {
        const elmt1 = document.getElementById(`${str1}-nav`); 
        const elmt2 = document.getElementById(`${str2}-nav`); 
        elmt1.addEventListener('click', ()=>{
            if(elmt2.classList.contains('selected')) {
                elmt2.classList.remove('selected');
                elmt1.classList.add('selected');
                document.getElementById(`${str1}`).classList.toggle('none');
                document.getElementById(`${str2}`).classList.toggle('none');
            }
        })
    }
}
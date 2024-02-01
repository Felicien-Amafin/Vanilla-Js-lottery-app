// Has to be instantiated
export class SearchUi {
    constructor(subContainerClass, h2Title, h2AdditionalClass) {
        this.subContainerClass = subContainerClass;
        this.h2Title = h2Title;
        this.h2AdditionalClass = h2AdditionalClass;
        displaySearchUi(this.subContainerClass, this.h2Title, this.h2AdditionalClass);
    }

    displaySearchUi(subContainerClass, h2Title, h2AdditionalClass) {
        createGenericContainer(this.subContainerClass, this.h2Title, this.h2AdditionalClass);
    }
    addSpecificEl() {
        
    }
}
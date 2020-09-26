export class FilterType{
    labelText;
    keyH;
    keyL;

    constructor(label, keyUpperLimit, keyLowerLimit) {
        this.labelText = label;
        this.keyH = keyUpperLimit;
        this.keyL = keyLowerLimit;
    }

}
export default FilterType;

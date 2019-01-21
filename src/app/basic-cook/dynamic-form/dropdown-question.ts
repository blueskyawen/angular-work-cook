import { FormControlBase } from './form-control-base';

export class DropdownQuestion extends FormControlBase<string> {
    controlType = 'dropdown';
    options: {key: string, value: string}[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}

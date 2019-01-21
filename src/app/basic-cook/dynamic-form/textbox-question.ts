import { FormControlBase } from './form-control-base';

export class TextboxQuestion extends FormControlBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}

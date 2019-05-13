/**
 * Created by root on 5/13/19.
 */
import { Directive, HostBinding, Input, HostListener, Attribute} from '@angular/core';

@Directive({
    selector: '[greet]'
})
export class GreetDirective {
    @Input() greet: string = 'Hello, Greet Directive!';

    constructor(@Attribute('author') public author: string) {
        console.log(author);
    }

    @HostBinding() get innerText() {
        return this.greet;
    }

    @HostListener('click',['$event']) onClick(event) {
        this.greet = 'Clicked Greet!';
    }
}
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[appDropDownDirective]'
})

export class dropDownDirective{
    @HostBinding('class.open') showOptions = false;

    @HostListener('click') toggleOptions(){
        this.showOptions = !this.showOptions;
    }
}
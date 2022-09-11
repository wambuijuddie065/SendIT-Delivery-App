import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[AppBackground]'
})
export class AppBackgroundDirective {

  
  @Input() backgroundColor:string = 'white';

	@Input() textColor:string = 'black';

	@HostBinding('style.backgroundColor') bgColor!:string;

	@HostBinding('style.color') color!:string;  

	constructor() {}

	ngOnInit() {

		this.bgColor = this.backgroundColor;		

		this.color = this.textColor;

  	}

}

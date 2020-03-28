import { LightningElement } from 'lwc';

export default class HelloWebComponent extends LightningElement {
    greeting = 'Trailblazer';
    timeval = 0;
    
    currentDate = new Date().toDateString();
    get capitalizedGreeting() {
	    return `Hello ${this.greeting.toUpperCase()}!`;
    }

    handleGreetingChange(event){
        this.greeting = event.target.value;
    }
    

    connectedCallback(){
       // alert();
        setInterval(function(){ 
            console.log('test');
           this.timeval +=1;
         }, 3000);
    }
}
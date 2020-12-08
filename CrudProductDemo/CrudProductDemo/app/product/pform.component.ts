import {Component,Output,EventEmitter,SimpleChanges, Input} from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from "../product.service";
@Component({
    selector:"pform",
    templateUrl:"./pform.component.html",
    styleUrls:["./pform.component.css"]
})
export class PformComponent{
    constructor(private pservice:ProductService){

    }
    pid:number;
    pname:string;
    price:number;
    @Input("upprod") prod:Product;
    @Output() myevent=new EventEmitter();
    //this gets called every time any @input property changes
    ngOnChanges(change:SimpleChanges){
        console.log(change);
          if(change["prod"].currentValue!=change["prod"].previousValue){
              //this will display data in the form
              this.pid=this.prod.pid;
              this.pname=this.prod.pname;
              this.price=this.prod.price;

          }

    }

    addProduct(){
        let p=new Product(this.pid,this.pname,this.price);
        console.log(p);
        this.pservice.addProduct(p);
        this.pid=0;
        this.pname="";
        this.price=0;
        //this will change the value of flag in ptab to false
        this.myevent.emit(false);

    }
    updateProduct(){
        let p=new Product(this.pid,this.pname,this.price);
        console.log(p);
        this.pservice.updateProduct(p);
        //this will clear the form
        this.pid=0;
        this.pname="";
        this.price=0;
        this.myevent.emit(false);
    }
}
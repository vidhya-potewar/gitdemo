import { Injectable } from '@angular/core';
import {Product} from './product.model';

@Injectable()
export class ProductService{
    parr=[new Product(12,"lays",30.00),
          new Product(13,"nachos",120.00),
        new Product(14,"Cocca cola",40.00),
        new Product(14,"biscuits",40.00)];
  
   getAllProduct():Product[]{
       return this.parr;
   }

   addProduct(p:Product){
       this.parr.push(p);
   }
   updateProduct(p:Product){
       for(let i=0;i<this.parr.length;i++){
           if(this.parr[i].pid==p.pid){
            this.parr[i].pname=p.pname;
            this.parr[i].price=p.price;
            break;
           }

       }
   }

   deleteProduct(p:Product){
    for(let i=0;i<this.parr.length;i++){
        if(this.parr[i].pid==p.pid){
         //delete 1 object from array from i th position  
         this.parr.splice(i,1);
         break;
        }

    }
   }
}
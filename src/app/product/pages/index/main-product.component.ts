import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './interfaces/producto.interfase';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrl: './main-product.component.css'
})
export class MainProductComponent implements OnInit {

  constructor(private productService : ProductService,  private router: Router){}

  public listProduct:Product[] = [];
  public product:Product = {

  };

  ngOnInit(): void {
    this.getList();
  }

  getList():void{
    this.productService.getList().subscribe(
      (response) => {

          this.listProduct = response

          console.log(this.listProduct);
      },
      (error) => {
        console.error('Error:', error);
      }
    )
  }

  editarProduct(productId:number):void{
    this.productService.setEditar(true)
    this.productService.findById(productId).subscribe(
      (response) => {
        const{valid}= response

        if(valid){

          this.router.navigate(['producto/editar/',productId]);
        }
    },
    (error) => {
      console.error('Error:', error);
    }
    )
  }

  deleteProduct(id:number,estado:number){
    const confirmation = confirm('¿Estás seguro de que deseas eliminar este producto?');
    if(confirmation){
      var accion = estado == 1 ? "desactivar" : "activar"

      this.product = {
        accion: accion,
        id: id
      };

      this.productService.deleteProduct(this.product).subscribe(
        (response) => {
          const{valid,msg}= response

          if(valid){
            alert(msg)
            this.getList()

          }
      },
      )
    }
  }

}

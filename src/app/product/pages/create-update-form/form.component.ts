import { Component, OnInit } from '@angular/core';
import { Product } from '../index/interfaces/producto.interfase';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../../auth/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormProductComponent implements OnInit{

  constructor(private productService: ProductService , private userInfo: UserService, private router: Router, private routerActivate:ActivatedRoute
   ){ }

  ngOnInit(): void {
    this.editarProducto()
  }
  public product : Product = {
    nombre: "",
    precio: 0,
   };

  public editar: boolean = false;
  public id: number = 0;

  validatedForm():void{
    if(this.editar){
      this.updateProduct(this.product)
      return
    }
    this.crearProduct(this.product)

  }

  crearProduct(product:Product){
    product.User_id = this.userInfo.getUserId()
    product.clase_id = 2
    product.tercero = 1

    this.productService.createproduct(product).subscribe(
      (response) => {
        const{valid,msg} = response
       if(valid)

        alert(msg)
        this.router.navigate(['producto/lista']);
    },
    (error) => {
      console.error('Error:', error);
    }
    )
  }

  updateProduct(product:Product){

    product.id = this.id;
    product.clase_id = 3;

    this.productService.updateProduct(product).subscribe(
      (response) => {
        const{valid, msg} = response

        if(valid){
          alert(msg)
        }
    }
    )
  }
  editarProducto(){
    this.editar = this.productService.getEditar();

    if( this.editar){
      this.id = Number(this.routerActivate.snapshot.paramMap.get("id"))

      this.productService.findById(this.id).subscribe(
        (response) => {
          const{valid,product}= response

          if(valid){
            this.product = product
          }
      },
      (error) => {
        console.error('Error:', error);
      }
      )
    }

  }



}

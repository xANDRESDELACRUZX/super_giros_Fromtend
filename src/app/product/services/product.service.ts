import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../../auth/services/user.service';
import { Observable } from 'rxjs';
import { Product } from '../pages/index/interfaces/producto.interfase';

@Injectable({providedIn: 'root'})

export class ProductService {

  constructor(private http: HttpClient, private userInfo: UserService) { }
  private apiUrl = 'http://localhost:8085/api/product'; // Cambia por tu API
  //private apiUrl = 'http://localhost:8090/product'; // Cambia por tu API

  //editar
  private editar: boolean = false
  private product: Product [] = []

      //saber si estoy editando
      setEditar(editar: boolean) {
        this.editar = editar
      }


      getEditar() {
        return this.editar;
      }

      //cargar producto
      getProducto(): Product[] {
        return this.product;
      }

      setProducto(product: Product) {
        this.product.push(product)
      }


      // Método traer lista
      getList(): Observable<any> {
        const headers = new HttpHeaders({
          'x-Auth-Token': this.userInfo.getToken(), // Agrega tus headers aquí
          'userid': this.userInfo.getUserId()
        });
        return this.http.get<any>(this.apiUrl+'/list', {headers});
      }

      // Método crear producto
      createproduct(product:Product): Observable<any> {
        const headers = new HttpHeaders({
          'x-Auth-Token': this.userInfo.getToken(), // Agrega tus headers aquí
          'userid': this.userInfo.getUserId()
        });
        return this.http.post<any>(this.apiUrl+'/add', product ,{headers});
      }

      // Método find by id
        findById(id:Number){
          const headers = new HttpHeaders({
            'x-Auth-Token': this.userInfo.getToken(), // Agrega tus headers aquí
            'userid': this.userInfo.getUserId()
          });

          return this.http.get<any>(this.apiUrl+'/'+id ,{headers});
        };

        //update
        updateProduct(product:Product){

          const headers = new HttpHeaders({
            'x-Auth-Token': this.userInfo.getToken(), // Agrega tus headers aquí
            'userid': this.userInfo.getUserId()
          });

          return this.http.post<any>(this.apiUrl+'/update', product, {headers});
        }

        deleteProduct(product:Product){

          const headers = new HttpHeaders({
            'x-Auth-Token': this.userInfo.getToken(), // Agrega tus headers aquí
            'userid': this.userInfo.getUserId()
          });
          return this.http.post<any>(this.apiUrl+'/updateStatus', product, {headers});
        }



}

import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class ProductosService {

  productos: any[] = []
  cargando: boolean = true

  constructor(private http: Http) {
    this.cargar_productos()
  }

  public cargar_productos() {
    this.cargando = true
    this.http.get('https://paginaweb-bb5e9.firebaseio.com/productos_idx.json')
      .subscribe(data => {
        setTimeout(() => {
          this.cargando = false
          this.productos = data.json()
        }, 1000)
      })
  }
}

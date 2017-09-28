import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class ProductosService {

  productos: any[] = []
  productos_filtrados: any[] = []
  cargando: boolean = true

  constructor(private http: Http) {
    this.cargar_productos()
  }

  public buscar_producto(termino: string) {
    if (this.productos.length === 0) {
      this.cargar_productos().then(() => {
        this.filtrar_productos(termino)
      })
    } else {
      this.filtrar_productos(termino)
    }
  }

  private filtrar_productos(termino: string) {
    this.productos_filtrados = []
    termino = termino.toLowerCase()
    this.productos.forEach((prod, index) => {
      if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.productos_filtrados.push(prod)
      }
      // console.log(prod)
    })
  }

  public cargar_producto(id: string) {
    return this.http.get(`https://paginaweb-bb5e9.firebaseio.com/productos/${id}.json`)
  }

  public cargar_productos() {
    this.cargando = true
    let promesa = new Promise((resolve, reject) => {
      this.http.get('https://paginaweb-bb5e9.firebaseio.com/productos_idx.json')
        .subscribe(data => {
          setTimeout(() => {
            this.cargando = false
            this.productos = data.json()
            resolve()
          }, 1000)
        })
    })
    return promesa
  }
}

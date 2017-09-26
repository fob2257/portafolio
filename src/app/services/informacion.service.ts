import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class InformacionService {

  info: any = {}
  equipo: any[] = []
  cargada: boolean = false

  constructor(public http: Http) {
    this.carga_info()
    this.carga_firebase()
  }
  public carga_info() {
    this.http.get('assets/data/info.pagina.json').subscribe(data => {
      // console.log(data.json())
      // this.cargada = true
      this.info = data.json()
    })
  }
  public carga_firebase() {
    this.http.get('https://paginaweb-bb5e9.firebaseio.com/equipo.json').subscribe(data => {
      this.equipo = data.json()
    })
  }
}


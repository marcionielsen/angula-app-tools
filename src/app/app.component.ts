import { Component, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo: String = (environment.production) ? 'AppTools' : 'AppTools - [Desenvolvimento]';

  formulario = new FormGroup({
    texto :  new FormControl(''),
    txtConvertido : new FormControl('')  
  });

  constructor() { }
  
  public converter() {
    this.formulario.get('txtConvertido').setValue(this.acentuarTexto(this.formulario.get('texto').value));
  }

  private acentuarTexto(mensagem : string)
  {
     let caracterAcentuado : string[] = ['á', 'à', 'â',  
     'ã', 'ä', 'Á', 'À', 'Â', 'Ã', 'Ä', 'é', 'è', 'ê', 'ê', 'É', 'È', 'Ê', 'Ë', 'í', 'ì',
     'î', 'ï', 'Í', 'Ì', 'Î', 'Ï', 'ó', 'ò', 'ô', 'õ', 'ö', 'Ó', 'Ò', 'Ô', 'Õ', 'Ö', 'ú', 
     'ù', 'û', 'ü', 'Ú', 'Ù', 'Û', 'ç', 'Ç', 'ñ', 'Ñ', '&', '\''];

     let codigoAcentuado : string[]   = ['00e1', '00e0', '00e2',
     '00e3', '00e4', '00c1', '00c0', '00c2', '00c3', '00c4', '00e9', '00e8', '00ea', '00ea', 
     '00c9', '00c8', '00ca', '00cb', '00ed', '00ec', '00ee', '00ef', '00cd', '00cc', '00ce', 
     '00cf', '00f3', '00f2', '00f4', '00f5', '00f6', '00d3', '00d2', '00d4', '00d5', '00d6',
     '00fa', '00f9', '00fb', '00fc', '00da', '00d9', '00db', '00e7', '00c7', '00f1', '00d1', 
     '0026', '0027'];

      /* mapeando a mensagem */
      var mapa = new Map();
      
      for (var i = 0, len = mensagem.length; i < len; i++) {
        mapa.set(i, mensagem[i]);
      }

      var tamanho = mapa.size;
      var novaMsg : string = "";

      for (var i = 0, len = mapa.size; i < len; i++) {
        
        if (caracterAcentuado.includes(mapa.get(i), 0)) {
          var str1 = '\\u'.concat( codigoAcentuado[caracterAcentuado.indexOf(mapa.get(i), 0)].toUpperCase());

          novaMsg = novaMsg + str1;
        } else {
          novaMsg = novaMsg + mapa.get(i);
        }
      }
          
      return novaMsg;

/*
      return mensagem.split('á').join('\\u'.concat('00e1'.toUpperCase()))
              .split('à').join('\\u'.concat('00e0'.toUpperCase()))
              .split('â').join('\\u'.concat('00e2'.toUpperCase()))
              .split('ã').join('\\u'.concat('00e3'.toUpperCase()))
              .split('ä').join('\\u'.concat('00e4'.toUpperCase()))
              .split('Á').join('\\u'.concat('00c1'.toUpperCase()))
              .split('À').join('\\u'.concat('00c0'.toUpperCase()))
              .split('Â').join('\\u'.concat('00c2'.toUpperCase()))
              .split('Ã').join('\\u'.concat('00c3'.toUpperCase()))
              .split('Ä').join('\\u'.concat('00c4'.toUpperCase()))
              .split('é').join('\\u'.concat('00e9'.toUpperCase()))
              .split('è').join('\\u'.concat('00e8'.toUpperCase()))
              .split('ê').join('\\u'.concat('00ea'.toUpperCase()))
              .split('ê').join('\\u'.concat('00ea'.toUpperCase()))
              .split('É').join('\\u'.concat('00c9'.toUpperCase()))
              .split('È').join('\\u'.concat('00c8'.toUpperCase()))
              .split('Ê').join('\\u'.concat('00ca'.toUpperCase()))
              .split('Ë').join('\\u'.concat('00cb'.toUpperCase()))
              .split('í').join('\\u'.concat('00ed'.toUpperCase()))
              .split('ì').join('\\u'.concat('00ec'.toUpperCase()))
              .split('î').join('\\u'.concat('00ee'.toUpperCase()))
              .split('ï').join('\\u'.concat('00ef'.toUpperCase()))
              .split('Í').join('\\u'.concat('00cd'.toUpperCase()))
              .split('Ì').join('\\u'.concat('00cc'.toUpperCase()))
              .split('Î').join('\\u'.concat('00ce'.toUpperCase()))
              .split('Ï').join('\\u'.concat('00cf'.toUpperCase()))
              .split('ó').join('\\u'.concat('00f3'.toUpperCase()))
              .split('ò').join('\\u'.concat('00f2'.toUpperCase()))
              .split('ô').join('\\u'.concat('00f4'.toUpperCase()))
              .split('õ').join('\\u'.concat('00f5'.toUpperCase()))
              .split('ö').join('\\u'.concat('00f6'.toUpperCase()))
              .split('Ó').join('\\u'.concat('00d3'.toUpperCase()))
              .split('Ò').join('\\u'.concat('00d2'.toUpperCase()))
              .split('Ô').join('\\u'.concat('00d4'.toUpperCase()))
              .split('Õ').join('\\u'.concat('00d5'.toUpperCase()))
              .split('Ö').join('\\u'.concat('00d6'.toUpperCase()))
              .split('ú').join('\\u'.concat('00fa'.toUpperCase()))
              .split('ù').join('\\u'.concat('00f9'.toUpperCase()))
              .split('û').join('\\u'.concat('00fb'.toUpperCase()))
              .split('ü').join('\\u'.concat('00fc'.toUpperCase()))
              .split('Ú').join('\\u'.concat('00da'.toUpperCase()))
              .split('Ù').join('\\u'.concat('00d9'.toUpperCase()))
              .split('Û').join('\\u'.concat('00db'.toUpperCase()))
              .split('ç').join('\\u'.concat('00e7'.toUpperCase()))
              .split('Ç').join('\\u'.concat('00c7'.toUpperCase()))
              .split('ñ').join('\\u'.concat('00f1'.toUpperCase()))
              .split('Ñ').join('\\u'.concat('00d1'.toUpperCase()))
              .split('&').join('\\u'.concat('0026'.toUpperCase()))
              .split('\'').join('\\u'.concat('0027'.toUpperCase())); */
  } 
}

import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "montant"
})
export class MontantPipe implements PipeTransform {
  transform(nombre: number, symbole = "€") {
    return nombre.toLocaleString() + " " + symbole;
  }
}

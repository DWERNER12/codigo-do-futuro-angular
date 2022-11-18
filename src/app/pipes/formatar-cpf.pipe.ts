import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarCpf'
})
export class FormatarCpfPipe implements PipeTransform {

  transform(cpf: any): String {
    let cpfFormatado = cpf.toString();
    return cpfFormatado.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

}


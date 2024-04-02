import { Categoria } from "./domain/categoria";
import { Emprestimo } from "./domain/emprestimo";
import { Livro } from "./domain/livro";
import { Usuario } from "./domain/usuario";

let nomeDaVariavel: string;
nomeDaVariavel = "Teste";
let nomeDaVariavel2: string = "Teste";
let livro1: Livro = new Livro("Uma janela em Copacabana","Luiz Alfredo Roza",Categoria.FICCAO_CIENTIFICA, 5,1);

var livro2: Livro = new Livro("Escravidão","Laurentino Gomes", Categoria.TERROR,2,23);
livro1.exibir();
    //livro2.exibir();
   // console.log(livro1.titulo);
var usuario1: Usuario = new Usuario("Yndiana", 15,"Rua Rosa",21992136954);
var usuario2: Usuario = new Usuario("Ana",20,"Rua Amarela", 21556425);
usuario1.exibir();
var emprestimo1: Emprestimo = new Emprestimo(livro1,usuario2,10022024,12022024,1);

    emprestimo1.exibir();
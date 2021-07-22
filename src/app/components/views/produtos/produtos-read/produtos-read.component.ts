import { Component, OnInit } from "@angular/core";
import { ProdutosService } from "../../produtos.service";
import { Produtos } from "../produtos.models";

@Component({
  selector: "app-produtos-read",
  templateUrl: "./produtos-read.component.html",
  styleUrls: ["./produtos-read.component.css"],
})
export class ProdutosReadComponent implements OnInit {
 

  constructor(private service: ProdutosService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta)
      this.produtos = resposta;
    });
  }
  
  produtos: Produtos[] = [];
  displayedColumns: string[] = [
    "productName",
    "description",
    "targetMarket",
    "stacks",
  ];
}

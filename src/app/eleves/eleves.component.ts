import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-eleves",
  templateUrl: "./eleves.component.html",
  styleUrls: ["./eleves.component.css"]
})
export class ElevesComponent implements OnInit {
  phrase = "Bonjour à tous";
  property = "prenom";
  filtre = "";
  eleves = [
    { prenom: "bob", nom: "leponge" },
    { prenom: "billy", nom: "lekid" },
    { prenom: "tom", nom: "sawyer" },
    { prenom: "joe", nom: "l'indien" }
  ];
  constructor() {}

  ngOnInit() {}
}

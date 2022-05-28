import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ConsumerDiceComponent } from "./consumer-dice/consumer-dice.component";
import { CountriesComponentComponent } from "./countries-component/countries-component.component";
import { HomeComponent } from "./home/home.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PhraseComponent } from "./phrase/phrase.component";
import { SuperheroComponent } from "./superhero/superhero.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "superhero", component: SuperheroComponent },
  { path: "dice", component: ConsumerDiceComponent },
  { path: "phrase", component: PhraseComponent },
  { path: "country", component: CountriesComponentComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

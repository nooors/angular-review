import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShowSuperheroComponent } from "./show-superhero/show-superhero.component";
import { SuperheroComponent } from "./superhero/superhero.component";
import { TableDutyComponent } from "./table-duty/table-duty.component";
import { ConsumerDiceComponent } from "./consumer-dice/consumer-dice.component";
import { PhraseComponent } from "./phrase/phrase.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./home/home.component";
import { CountriesComponentComponent } from "./countries-component/countries-component.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ExampleReactiveFormComponent } from './example-reactive-form/example-reactive-form.component';
import { FormExerciciComponent } from './form-exercici/form-exercici.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowSuperheroComponent,
    SuperheroComponent,
    TableDutyComponent,
    ConsumerDiceComponent,
    PhraseComponent,
    NavigationComponent,
    NotFoundComponent,
    HomeComponent,
    CountriesComponentComponent,
    ExampleReactiveFormComponent,
    FormExerciciComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

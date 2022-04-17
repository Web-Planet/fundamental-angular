import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {CounterEventComponent} from './counter-event/counter-event.component';
import {CounterTwoWayBindingComponent} from './counter-two-way-binding/counter-two-way-binding.component';
import {FormsModule} from '@angular/forms';
import {PangkatPipe} from './pangkat.pipe';
import {HighlightDirective} from './highlight.directive';
import {Highlight2Directive} from './highlight2.directive';
import {Highlight3Directive} from './highlight3.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CounterEventComponent,
    CounterTwoWayBindingComponent,
    PangkatPipe,
    HighlightDirective,
    Highlight2Directive,
    Highlight3Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

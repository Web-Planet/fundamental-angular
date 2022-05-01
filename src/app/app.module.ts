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
import {Child1Component} from './aftercontentinit/child1/child1.component';
import {Child2Component} from './aftercontentinit/child2/child2.component';
import {Grandchild1Component} from './aftercontentinit/grandchild1/grandchild1.component';
import {Anak1Component} from './aftercontentchecked/anak1/anak1.component';
import {Anak2Component} from './aftercontentchecked/anak2/anak2.component';
import {Child3Component} from './afterviewinit/child3/child3.component';
import {Child4Component} from './afterviewinit/child4/child4.component';
import {Anak3Component} from './afterviewchecked/anak3/anak3.component';
import {Anak4Component} from './afterviewchecked/anak4/anak4.component';
import {DestroyDirective} from './destroy.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CounterEventComponent,
    CounterTwoWayBindingComponent,
    PangkatPipe,
    HighlightDirective,
    Highlight2Directive,
    Highlight3Directive,
    Child1Component,
    Child2Component,
    Grandchild1Component,
    Anak1Component,
    Anak2Component,
    Child3Component,
    Child4Component,
    Anak3Component,
    Anak4Component,
    DestroyDirective
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

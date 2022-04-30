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
import {Hightlight3Directive} from './hightlight3.directive';
import {Child1Component} from './aftercontentinit/child1/child1.component';
import {Child2Component} from './aftercontentinit/child2/child2.component';
import {GrandChildComponent} from './aftercontentinit/grand-child/grand-child.component';
import {Child3Component} from './aftercontentchecked/child3/child3.component';
import {Child4Component} from './aftercontentchecked/child4/child4.component';
import {GrandChild2Component} from './aftercontentchecked/grand-child2/grand-child2.component';
import {Comp1Component} from './afterviewinit/comp1/comp1.component';
import {Comp2Component} from './afterviewinit/comp2/comp2.component';
import {GrandCompComponent} from './afterviewinit/grand-comp/grand-comp.component';
import {Comp3Component} from './afterviewchecked/comp3/comp3.component';
import {Comp4Component} from './afterviewchecked/comp4/comp4.component';
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
    Hightlight3Directive,
    Child1Component,
    Child2Component,
    GrandChildComponent,
    Child3Component,
    Child4Component,
    GrandChild2Component,
    Comp1Component,
    Comp2Component,
    GrandCompComponent,
    Comp3Component,
    Comp4Component,
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

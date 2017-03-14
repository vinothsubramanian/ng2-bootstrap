import { ModuleWithProviders, NgModule, Provider } from '@angular/core';

import { BsDropdownDirective } from './bs-dropdown.directive';
import { BsDropdownMenuDirective } from './bs-dropdown-menu.directive';
import { BsDropdownToggleDirective } from './bs-dropdown-toggle.directive';
import { BsDropdownContainerComponent } from './bs-dropdown-container.component';
import { BsDropdownState } from './bs-dropdown.state';
import { BsDropdownConfig } from './bs-dropdown.config';

import { PositioningService } from '../positioning/positioning.service';
import { ComponentLoaderFactory } from '../component-loader/component-loader.factory';

@NgModule({
  declarations: [
    BsDropdownMenuDirective,
    BsDropdownToggleDirective,
    BsDropdownContainerComponent,
    BsDropdownDirective
  ],
  exports: [
    BsDropdownMenuDirective,
    BsDropdownToggleDirective,
    BsDropdownDirective
  ],
  entryComponents: [BsDropdownContainerComponent]
})
export class BsDropdownModule {
  public static forRoot(config?: any): ModuleWithProviders {
    return {ngModule: BsDropdownModule, providers: [
      ComponentLoaderFactory,
      PositioningService,
      BsDropdownState,
      {provide: BsDropdownConfig, useValue: config ? config : new BsDropdownConfig()}
    ]};
  };

}

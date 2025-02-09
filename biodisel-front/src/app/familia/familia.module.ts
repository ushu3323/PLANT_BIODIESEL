import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DividerModule } from 'primeng/divider';
import { FamiliaComponent } from './familia.component';
import { AbmfamiliaModule } from './abm-familia/abm-familia.module';
import { FamiliaRoutingModule } from './familia-routing.module';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    FamiliaComponent,
  ],
  imports: [
    FamiliaRoutingModule,
    CommonModule,
    ToolbarModule,
    BreadcrumbModule,
    TableModule,
    ButtonModule,
    MenubarModule,
    ConfirmPopupModule,
    ToastModule,
    PanelMenuModule,
    DividerModule,
    AbmfamiliaModule,
    DynamicDialogModule
  ],
})
export class FamiliaModule { }

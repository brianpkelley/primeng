import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SplitterModule } from 'primeng/splitter';
import { AccessibilityDoc } from './accessibilitydoc';
import { HorizontalDoc } from './horizontaldoc';
import { ImportDoc } from './importdoc';
import { MinMaxDoc } from './minmaxdoc';
import { NestedDoc } from './nesteddoc';
import { SizeDoc } from './sizedoc';
import { StyleDoc } from './styledoc';
import { VerticalDoc } from './verticaldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, SplitterModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, HorizontalDoc, SizeDoc, MinMaxDoc, VerticalDoc, NestedDoc, StyleDoc, AccessibilityDoc]
})
export class SplitterDocModule {}

import { Component, Input, OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProjectDialogComponent } from '../project-dialog/project-dialog.component'

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: {
    company: String,
    industry: String,
    imgUrl: String,
  };
  
  constructor(public dialog: MatDialog, public overlay: Overlay) { }

  ngOnInit() {}

  openDialog(project): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      data: this.project,
      panelClass: 'md:w-2/3',
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

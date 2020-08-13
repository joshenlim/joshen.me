import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public project: {
      company: String,
      desc: String,
      url: String,
      industry: String,
      imgUrl: String,
      duration: String,
      role: String,
      workType: String,
      workSummary: String,
    }
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

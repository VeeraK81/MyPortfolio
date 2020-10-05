import { Component, OnInit } from '@angular/core';
import { CentralisedDataService } from 'src/app/shared/services/centralised-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';
import { ConnectionService } from '../shared/services/connection.service';

import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogPopupElementComponent } from '../dialog-popup-element/dialog-popup-element.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;

  constructor(
    private cdservice: CentralisedDataService,
    private builder: FormBuilder,
    private contact: ConnectionService,
    public dialog: MatDialog
  ) {
    cdservice.changeMessage('Contact');
  }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      Comment: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(FormData) {
    console.log(FormData);
    // this.contact.sendMessage(FormData).subscribe(
    //   (response) => {
    //     location.href = '';
    //     console.log(response);
    //   },
    //   (error) => {
    //     // console.warn(error.responseText);
    //     // console.log({ error });
    //   }
    // );
    this.contact.sendMessage(FormData);
    this.dialog.open(DialogPopupElementComponent);
    this.FormData.reset();
  }

}

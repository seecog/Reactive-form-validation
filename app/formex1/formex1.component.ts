import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-formex1',
  templateUrl: './formex1.component.html',
  styleUrls: ['./formex1.component.css']
})
export class Formex1Component implements OnInit {
private frm : FormGroup;
  constructor(private _fb : FormBuilder) { 

   this.frm =  this._fb.group({
      first_name : ["Amit",
        [
            Validators.minLength(2),
            Validators.maxLength(8),
            Validators.pattern('^[a-zA-Z]+$')]
        ],
      last_name : [null,
        [
          Validators.required
        ]
      ]        
    })

    // this.frm = new FormGroup({
    //   first_name : new FormControl(null,[Validators.required,
    //     Validators.minLength(2),
    //     Validators.maxLength(8),
    //     Validators.pattern('^[a-zA-Z]+$')
    //   ]),
    //   last_name : new FormControl(null,[Validators.required])
    // })
  }

  register(){
    console.log('The record is ',this.frm.value);

    this.frm.patchValue({
      first_name : 'Mohan',
      last_name : ' kumar'
    })
  }

  ngOnInit() {

  }

}

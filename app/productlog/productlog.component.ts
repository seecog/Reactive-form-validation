import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-productlog',
  templateUrl: './productlog.component.html',
  styleUrls: ['./productlog.component.css']
})
export class ProductlogComponent implements OnInit {

  private productFrm: FormGroup;
  private products: any[] = [];
  private load_spinner : boolean = false;
  constructor(private http: Http, private _fb: FormBuilder) {
    this.getProducts();
    this.productFrm = this._fb.group({
      name: [null, [Validators.required]],
      cost: [null, [Validators.required]],
      image: [null, [Validators.required]],
      brand: [null, [Validators.required]],
      color: [null, [Validators.required]],
      support: [null, [Validators.required]]
    })
  }

  editProduct(product){
    this.productFrm.patchValue(product)
  }

  getProducts() {
    this.load_spinner = true;
    this.http.get('http://localhost:3000/api/products').subscribe(
      (res) => {
        console.log('The response is ', res.json())
        this.products = res.json();
      },
      (err) => {

      },
      ()=>{
        this.load_spinner = false;
      }
    )
  }

  saveProduct() {
    console.log(this.productFrm.value);
    this.http.post('http://localhost:3000/api/products', this.productFrm.value).subscribe(
      (res) => {
        console.log('The response is ', res);
        // this.productFrm.patchValue({
        //   name: '',
        //   cost: '',
        //   image: '',
        //   brand: '',
        //   color: '',
        //   support: ''
        // })
        this.productFrm.patchValue({})
      },
      (err) => {
        console.log('Th error is ', err)
      }
    )
  }

  ngOnInit() {
  }

}

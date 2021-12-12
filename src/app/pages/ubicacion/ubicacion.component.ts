import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/interfaces/order.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { OrderService } from 'src/app/services/order.service';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  submited : boolean = false;
  ubicationForm : FormGroup;
  creditCardForm: FormGroup;
  mapa!: mapboxgl.Map;
  data= JSON.stringify('all');
  token= JSON.stringify(localStorage.getItem("token"));
  longitud = -87.207;
  latitud = 14.0383;
  jsonLngLat: any;

  productData:Product = {
    idProduct: '',
    name: '',
    description: '',
    price: 0,
    img: '',
    active: false,
    amount: 0,
    totalPrice: 0
  }

  public order:Order = {
    _id: '',
    idBuyer: '',
    idBiker: '',
    products: [],
    paid: false,
    subtotal: 0,
    isv: 0,
    commission: 0,
    total: 0,
    address: '',
    phone: '',
    amountProducts: 0,
    taked: false,
    nameStatus: '',
    buyerName: '',
    location: {}
  }

  constructor(private router: Router,private CompanyService: CompanyService, private modalService: NgbModal, private OrderService: OrderService,private conf: NgbModalConfig, private fB:FormBuilder) {
      this.ubicationForm=this.fB.group({
          address: new FormControl ('',Validators.required),
          phone: new FormControl('',[Validators.required,Validators.minLength(8), Validators.maxLength(8)])
        }
      );

      this.creditCardForm=this.fB.group({
        numCard: new FormControl ('',[Validators.required,Validators.minLength(12), Validators.maxLength(12)]),
        expiredDate: new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(5)]),
        CVV: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(3)])
      });

  }

  get ubicationOrder () {
    return this.ubicationForm.controls;
  }

  get creditPay () {
    return this.creditCardForm.controls;
  }

  onSubmit(){
    this.submited=true;
    if(!this.ubicationForm.valid){
      return;
    }
  }

  ngOnInit(): void {
    this.order = this.OrderService.orderDatos;
    (mapboxgl as any).accessToken = environment.mapBoxKey;
    this.mapa = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.longitud, this.latitud],
      zoom: 15
    });

    this.crearMarcador(this.longitud, this.latitud);
  }

  cerrar(contentSuccess:any){
    let loc = {
      paid:true
    }

    this.OrderService.locationSet(loc).subscribe(res =>{
      if(res){
        this.modalService.dismissAll();
        this.conf.backdrop = 'static';
        this.conf.keyboard = false;
        this.modalService.open(contentSuccess, { centered: true, scrollable: true});
        this.newOrder()
      }else {
        alert("datos invalidos");
      }
    })
  }

  newOrder(){
    this.OrderService.createNewOrder()
    .subscribe(res =>{
      if(res){
        console.log("Se agrego nueva orden");

      }else {
        alert("datos invalidos");
      }
    })
  }

  pagar(content:any){
    var companyName = this.CompanyService.compDatos.name;
    var companyAddress = this.CompanyService.compDatos.address;
    const {address, phone} = this.ubicationForm.value;
    console.log(address, phone, this.jsonLngLat);
    let loc = {
      lng: this.longitud,
      lat: this.latitud
    }

    console.log('location: ',{location:loc, address, phone, companyName, companyAddress})

    this.OrderService.locationSet({location:loc, address, phone, companyName, companyAddress}).subscribe(res =>{
      if(res){
        this.modalService.open(content, { centered: true, scrollable: true });
      }else {
        alert("datos invalidos");
      }
    })

  }

  closeAndRecharge(){
    this.modalService.dismissAll();
    this.router.navigate(['/categories']);
  }

  crearMarcador(longitud: number, latitud: number) {
    const marcador = new mapboxgl.Marker({
      draggable: true
    }).setLngLat([longitud, latitud])
      .addTo(this.mapa);

    this.jsonLngLat=marcador.getLngLat();
    marcador.on('drag', () => {
      this.jsonLngLat=marcador.getLngLat();
      this.longitud=marcador.getLngLat().lng;
      this.latitud=marcador.getLngLat().lat;
    })
  }
}

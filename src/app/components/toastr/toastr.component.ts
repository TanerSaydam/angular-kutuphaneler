import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

  constructor(
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  toastrGoster(name: string){
    if (name == "success") {
      this._toastr.success("Başarılı mesajı gösterildi", "Başarılı")
    }

    if (name == "warning") {
      this._toastr.warning("Uyarı mesajı gösterildi", "Uyarı")
    }

    if (name == "info") {
      this._toastr.info("Bilgilendirme mesajı gösterildi", "Bilgilendirme")
    }

    if (name == "error") {
      this._toastr.error("Hata mesajı gösterildi", "Hata")
    }
    
  }

}

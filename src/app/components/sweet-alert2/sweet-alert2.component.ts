import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sweet-alert2',
  templateUrl: './sweet-alert2.component.html',
  styleUrls: ['./sweet-alert2.component.css']
})
export class SweetAlert2Component implements OnInit {

  constructor(

  ) { }

  ngOnInit(): void {
  }

  toastCagir(type: any){
     const Toast = Swal.mixin({
      toast: true,
       position: 'top-end',
       timer: 3000,
       timerProgressBar: true,
       showCancelButton: false,
       showConfirmButton: false,
       //color: "red",
       //background: "yellow"
     })
     Toast.fire('Something interesting happened', '', type)
  }

  swalCagir(message: string, title:string, btnName: string){
    const swal = Swal.fire({
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: btnName,
      text: message,
      icon: "question",
      cancelButtonText: "Vazgeç",
      cancelButtonColor: "red",
      title: title
    });

    return swal;
  }

  delete(){
    this.swalCagir("Silme işlemini yapmak istiyor musunuz?","Sil?","Sil").then((res)=>{
      if(res.isConfirmed){
        console.log("silindi");
      }      
    })
  }

}

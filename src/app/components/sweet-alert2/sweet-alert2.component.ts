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

  toastCagir(){
     const Toast = Swal.mixin({
      toast: true,
       position: 'top-end',
       timer: 3000,
       timerProgressBar: true
     })
     Toast.fire('Something interesting happened', '', 'info')
  }

}

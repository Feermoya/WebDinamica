import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

declare let $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

  whatsApp() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: true,
      customClass: { confirmButton: 'back9' }
    });

    Toast.fire({
      title: '555 555 555',
      background: 'rgb(233,233,0)'
    });
  }

  privacidad(){
    $('#privacidad').modal();
  }

  salir() {
    setTimeout(() => {
      $('#privacidad').modal('hide');
    }, 300);
  }

}

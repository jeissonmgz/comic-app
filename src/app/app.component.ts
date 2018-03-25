import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    this.cargarTooltipDeBootstrap();
  }

  cargarTooltipDeBootstrap() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
      $('[data-toggle="tooltip').on('click', function () {
        $(this).tooltip('hide');
        $("#DeleteUserModal").modal();
      });
    });
  }
}

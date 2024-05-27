import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    "../../../assets/css/style.css"
  ]
})
export class HeaderComponent  implements OnInit {

  ngOnInit() {
    this.loadScript('assets/js/vendor-all.min.js');
    this.loadScript('assets/js/plugins/bootstrap.min.js');
    this.loadScript('assets/js/ripple.js');
    this.loadScript('assets/js/pcoded.min.js');
    this.loadScript('assets/js/plugins/apexcharts.min.js');
    this.loadScript('assets/js/pages/dashboard-main.js');
  }

  private loadScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }
}

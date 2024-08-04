import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'portfolio';
   downloadFile(e:Event){
    const link = document.createElement('a');
    link.href = 'assets/Diptesh_Das_Dotnet_Resume.pdf';
    link.download = 'Diptesh_Das_Dotnet_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

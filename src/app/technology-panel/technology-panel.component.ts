import { Component,OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-technology-panel',
  templateUrl: './technology-panel.component.html',
  styleUrls: ['./technology-panel.component.css']
})
export class TechnologyPanelComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.logoContainer); // Check if logoContainer is defined
    if (this.logoContainer) {
      // Initial random positioning
      this.randomizePositions();
      // Set interval to reposition every 3 seconds
      setInterval(() => this.randomizePositions(), 3000);
    } else {
      console.error('logoContainer is not defined');
    }
  }
  @ViewChild('logoContainer') logoContainer! : ElementRef;

  logos = [
    { src: 'assets/ASP.NET.png', alt: 'Logo 1' },
    { src: 'assets/Dotnet Core.png', alt: 'Logo 2' },
    { src: 'assets/Oracle.png', alt: 'Logo 3' },
  ];

  ngOnInit() {
  }

  randomizePositions() {
    const container = this.logoContainer.nativeElement;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    anime({
      targets: container.children,
      translateX: () => Math.random() * (containerWidth - 50),
      translateY: () => Math.random() * (containerHeight - 50),
      easing: 'easeInOutQuad',
      duration: 1000
    });
  }
}


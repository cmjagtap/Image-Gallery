import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit,OnChanges {

	title = 'Recent pics';
	@Input() filterBy?: string = 'all'
	visibleImages: any[] = [];

  constructor(private imageService: ImageService,private route: ActivatedRoute) {
  	this.visibleImages = this.imageService.getImages();
   }

  ngOnInit() {
  }
  ngOnChanges()
  {
	this.visibleImages = this.imageService.getImages();  
  }
}

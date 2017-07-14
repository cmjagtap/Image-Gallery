import { Component, OnInit } from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
	image:any
  constructor(private imageService: ImageService, private route: ActivatedRoute) 
  { }

  ngOnInit() {
  this.image=this.imageService.getImage(
  	+this.route.snapshot.params['id']
  )
  }

}

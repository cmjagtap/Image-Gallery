import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
	
	visibleImages = [];
	getImages(){
	return this.visibleImages=IMAGES.slice(0);
	}
	
	getImage(id: number){
		return IMAGES.slice(0).find(image => image.id == id)
	}
}
const IMAGES = [
	{"id": 1, "category": "self", "caption": "At wagholi", "url":"assets/img/img_01.jpg"},
	{"id": 2, "category": "self", "caption": "At Z bridge pune", "url": "assets/img/img_02.jpg"},
	{"id": 3, "category": "self", "caption": "At Z bridge pune", "url": "assets/img/img_03.jpg"},
    {"id": 4, "category": "self", "caption": "At home", "url": "assets/img/img_self_01.jpg"},
    {"id": 5, "category": "self", "caption": "At home", "url": "assets/img/img_self_02.jpg"},
    {"id": 6, "category": "self", "caption": "At home", "url": "assets/img/img_self_03.jpg"},
    {"id": 7, "category": "self", "caption": "At Park", "url": "assets/img/img_self_04.jpg"},
    {"id": 8, "category": "self", "caption": "At Park", "url": "assets/img/img_self_05.jpg"},
    {"id": 9, "category": "self", "caption": "At Park", "url": "assets/img/img_self_07.jpg"},
    {"id": 10, "category": "self", "caption": "At Park", "url": "assets/img/img_self_08.jpg"},
    {"id": 11, "category": "self", "caption": "At Park", "url": "assets/img/img_self_09.jpg"},
    {"id": 12, "category": "self", "caption": "At Park", "url": "assets/img/img_self_10.jpg"},
    {"id": 13, "category": "self", "caption": "At Park", "url": "assets/img/img_self_11.jpg"},
    {"id": 14, "category": "self", "caption": "At Park", "url": "assets/img/img_self_12.jpg"},
    {"id": 15, "category": "self", "caption": "At Park", "url": "assets/img/img_self_13.jpg"},
    {"id": 16, "category": "self", "caption": "At Park", "url": "assets/img/img_self_14.jpg"},
    {"id": 17, "category": "self", "caption": "At Park", "url": "assets/img/img_self_15.jpg"},
    {"id": 18, "category": "self", "caption": "At Park", "url": "assets/img/img_self_16.jpg"},
    {"id": 19, "category": "self", "caption": "At Park", "url": "assets/img/img_self_17.jpg"},
    {"id": 20, "category": "self", "caption": "At Park", "url": "assets/img/img_self_18.jpg"},
    {"id": 21, "category": "self", "caption": "At Park", "url": "assets/img/img_self_19.jpg"},
    {"id": 22, "category": "self", "caption": "At Park", "url": "assets/img/img_self_20.jpg"},
    {"id": 23, "category": "self", "caption": "At Park", "url": "assets/img/img_self_06.jpg"},
    {"id": 24, "category": "friend", "caption": "At Park", "url": "assets/img/img_f_01.jpg"},
    {"id": 25, "category": "friend", "caption": "At Park", "url": "assets/img/img_f_02.jpg"},
    {"id": 26, "category": "friend", "caption": "At Park", "url": "assets/img/img_f_03.jpg"},
    {"id": 27, "category": "friend", "caption": "At Park", "url": "assets/img/img_f_04.jpg"},
    {"id": 28, "category": "family", "caption": "At Park", "url": "assets/img/img_04.jpg"},
    {"id": 29, "category": "family", "caption": "At Park", "url": "assets/img/img_05.jpg"},
    {"id": 30, "category": "family", "caption": "At Park", "url": "assets/img/img_06.jpg"},
    {"id": 31, "category": "family", "caption": "At Park", "url": "assets/img/img_07.jpg"},
    {"id": 32, "category": "family", "caption": "At Park", "url": "assets/img/img_08.jpg"},



]
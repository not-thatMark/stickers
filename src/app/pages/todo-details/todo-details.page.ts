import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {
  public currentImage: any;
  todo:Todo={
  task:'Test task',
  createdAt: new Date().getTime(),
  priority: 1
}

todoID=null;
  constructor(private camera: Camera,private todoService:TodoService,private route:ActivatedRoute, private loadingController:LoadingController,private nav:NavController) { }
 
  ngOnInit() {
    this.todoID=this.route.snapshot.params['id'];
    if(this.todoID)
    {
      this.loadTodo();
    }
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log("Camera issue:" + err);
    });
  }
  async loadTodo(){
    const loading =await this.loadingController.create({
      message: 'Loading....'
  });
    await loading.present();
   this.todoService.getTodo(this.todoID).subscribe(res=>{
     loading.dismiss();
     this.todo=res;
    });
   
  }
  async saveTodo(){
    const loading =await this.loadingController.create({
      message: 'Loading....'
  });
  await loading.present();
  if(this.todoID){
    this.todoService.updateTodo(this.todo,this.todoID).then(()=>{
      loading.dismiss();
      this.nav.navigateBack('list');
    });
  }
  else{
    this.todoService.addTodo(this.todo).then(()=>{
      loading.dismiss();
      this.nav.navigateBack('list');
    });
  }
  }

}

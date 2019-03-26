import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CameraPreview, CameraPreviewOptions} from '@ionic-native/camera-preview/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private cameraPreview: CameraPreview){
    this.cameraPreview.switchCamera();

    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
      console.log(res)
      },
      (err) => {
      console.log(err)
    });
  }
}

import * as THREE from 'three';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;
  private text : THREE.Mesh;
  private typedCurser$ : THREE.Mesh;
  private font : THREE.FontLoader ;
  public fps : number  = 30;

  private cube: THREE.Mesh;

  constructor(private http : HttpClient){

  }

  createScene(elementId: string): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(600, 500) 
   // this.renderer.setSize( window.innerWidth, window.innerHeight) ;

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 10;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight( 0x404040 );
    this.light.position.z = 10;
   // this.scene.add(this.light);

    let geometry = new THREE.BoxGeometry(3, 3, 3);
    let material = new THREE.MeshBasicMaterial({ color: 0x000ff0 });
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add(this.cube);
  }

  animate(): void {
    this.render();
  }

  render() {
    requestAnimationFrame(() => {
      this.render();
    });

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    let width = 600 ;//window.innerWidth;
    let height = 500 ; //window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }


  createAuthorFont(elementId: string, version = 1): void {
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    let width = 500;
		let height = 500;
    //this.renderer.setSize(300, 90) ;
    this.renderer.setSize(width, height) ;
    this.scene = new THREE.Scene();
    //this.scene.background = new THREE.Color(0xffffff);

    // create an locate the camera
    this.camera = new THREE.PerspectiveCamera(20,
                1.2,
                1, 1000);

    this.camera.position.z = 400;
    this.scene.add(this.camera);

    let loader = new THREE.FontLoader();
    this.text = new THREE.Mesh();
    this.typedCurser$ = new THREE.Mesh();
    this.getJSON('assets/font/fontAuthor.json')
    .then(res => {
      this.font = loader.parse(res);
      let geometryFirstName = new THREE.TextGeometry("Samir Romdhani", 
      {font: this.font, size: 6, height: 1});
      let subTitle = new THREE.TextGeometry("Hi, I’m Samir.", 
      {font: this.font, size: 4, height: 1});
      let part1 = new THREE.TextGeometry("I’m a software engineer graduated from National School of Computer",
       {font: this.font, size: 3, height: 1});
      let part2 = new THREE.TextGeometry("Science ( Ecole Nationale des Sciences de l’Informatique, ENSI ) living",
       {font: this.font, size: 3, height: 1});
      let part3 = new THREE.TextGeometry("in Paris, France.",
       {font: this.font, size: 3, height: 1});
       let part4 = new THREE.TextGeometry("I’m passionate about technology.",
       {font: this.font, size: 3, height: 1});
       let part5 = new THREE.TextGeometry("My major focus is on JAVA, Angular, full-stack development and I still",
       {font: this.font, size: 3, height: 1});
       let part6 = new THREE.TextGeometry("keep an eye out for the DevOps approach, docker platform, Kubernetes",
       {font: this.font, size: 3, height: 1});

       let part7 = new THREE.TextGeometry("and tools that manage any cloud infrastructure or service mainly Terraform.",
       {font: this.font, size: 3, height: 1});

       let cursor = new THREE.TextGeometry("|",
       {
          font: this.font,
          size: 2,
          height: 1,
          bevelEnabled: true,
          bevelThickness: 1,
          bevelSize: 0.5,
          bevelOffset: 0,
          bevelSegments: 3
        });

       let contacts = new THREE.TextGeometry("Follow us on",
       {font: this.font, size: 4, height: 1});

      let material = new THREE.MeshBasicMaterial({color:0X034b59});
      this.text = new THREE.Mesh(geometryFirstName, material);
      let sub  = new THREE.Mesh(subTitle, material);
      let p1 = new THREE.Mesh(part1, material);
      let p2 = new THREE.Mesh(part2, material);
      let p3 = new THREE.Mesh(part3, material);
      let p4 = new THREE.Mesh(part4, material);
      let p5 = new THREE.Mesh(part5, material);
      let p6 = new THREE.Mesh(part6, material);
      let p7 = new THREE.Mesh(part7, material);
      this.typedCurser$ = new THREE.Mesh(cursor, material);
      let contact = new THREE.Mesh(contacts, material);
      this.text.position.x = -80;
      this.text.position.y = 60;

      sub.position.x = -80;
      sub.position.y = 40;

      p1.position.x = -80;
      p1.position.y = 30;

      p2.position.x = -80;
      p2.position.y = 20;

      p3.position.x = -80;
      p3.position.y = 10;
       
      p4.position.x = -80;
      p4.position.y = 0;

      p5.position.x = -80;
      p5.position.y = -10;

      p6.position.x = -80;
      p6.position.y = -20;

      p7.position.x = -80;
      p7.position.y = -30;

      this.typedCurser$.position.x = 84;
      this.typedCurser$.position.y = -29.2;

      contact.position.x = -27;
      contact.position.y = -67;

      //this.scene.add(this.text);
      this.scene.add(sub);
      this.scene.add(p1);
      this.scene.add(p2);
      this.scene.add(p3);
      this.scene.add(p4);
      this.scene.add(p5);
      this.scene.add(p6);
      this.scene.add(p7);
      this.scene.add(this.typedCurser$);
      this.scene.add(contact);

    });
   };

   animateFontAuthor(version = 1): void {
    this.renderFontAuthor();
  }
  
  renderFontAuthor() {
    var fps = 3.5;
     setTimeout(() => {
        requestAnimationFrame(() => {
          this.renderFontAuthor();
        });
    }, 2000 / fps)
    //this.text.rotation.z -= 0.01;
    this.typedCurser$.visible = !this.typedCurser$.visible;
    this.renderer.render(this.scene, this.camera);
  }

  public checkVisibulity() : boolean {
    if(this.text.visible) {
      return true ;
    }else
    return false ;
  }

  public getJSON(file : any) {
    return this.http.get(file).toPromise();
}
}


import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { EngineService } from 'src/app/engine/threedemo.service';

@Component({
  selector: 'app-custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['./custom-layout.component.scss']
})
export class CustomLayoutComponent implements OnInit, AfterContentChecked {

  public visible : boolean = false;
  public canvas : any;
  public mainData : any;
  private authorEleId = 'renderAuthor';

  constructor(private engServ: EngineService) { }

  ngOnInit() {
    this.engServ.createAuthorFont(this.authorEleId);
    this.engServ.animateFontAuthor();
    this.mainData = (document.getElementById(this.authorEleId) as HTMLCanvasElement).toDataURL();
  }

  ngAfterContentChecked(): void {
    let blank = document.getElementById(this.authorEleId) as HTMLCanvasElement ;
    if(this.mainData == blank.toDataURL()){
      this.visible = false ;
    }else {
      this.visible = true ;
    }
  }

}

import { Component } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Image Search tool using Angular, Node.js and AWS';
  filter='';
  desc = "";
  showDescError = false;
  showFilterError = false;
  successMessage=false;
  failureMessage=false;
  failureSearchMessage=false;
  selectedVal='';
  searched=false;
  filteredimages: any[]=[];
  responsecode;
  images: any[] = [];
  constructor(private uploadService: UploadService) {
    this.uploadService.getImages().subscribe(response=>{
      console.log(response);
      var x = JSON.parse(JSON.stringify(response));
      for(var i=0;i<x.length;i++)
      {
        var data={
          'name':x[i].id,
          'desc':x[i].desc,
          'size':x[i].size,
          'type':x[i].type
        };
        console.log(x[i].responsecode);
        this.images.push(data);
      }
    })
    this.filteredimages=[];
  }

  ngOnInit() {
  }

  selected(value) {
    this.selectedVal = value;
  }
  search(){
    this.searched=true;
    this.filteredimages=[];
    alert(this.selectedVal+" "+this.desc);
    if(this.selectedVal!='' && this.desc!=''){
      this.uploadService.searchImages(this.selectedVal,this.desc).subscribe(response=>{
        console.log(response);
        var y = JSON.parse(JSON.stringify(response));
        if(y.length==1)
          this.responsecode=y[0].responsecode;
        for(var i=0;i<y.length;i++)
        {
          var data={
            'name':y[i].id,
            'desc':y[i].desc,
            'size':y[i].size,
            'type':y[i].type,
          }
          console.log(y[i].responsecode);
          console.log(data);
          this.filteredimages.push(data);
          console.log(this.filteredimages.length);
        }
        if(this.responsecode==204)
        {
          console.log(this.responsecode)
          this.searched=false;
          this.failureSearchMessage=true;
          this.failureMessage=false;
          this.successMessage=false;
        }
        else
        {
          this.successMessage=true;
          this.failureSearchMessage=false;
          this.failureMessage=false;
          this.searched=true;
        }
      });
      if(this.desc=='')
      this.showDescError=false;
      if(this.selectedval=='')
      this.showFilterError=false;
    }
    else{
      if(this.selectedVal=='')
        this.showFilterError=true;
      if(this.desc=='')
        this.showDescError=true;
      this.failureMessage=true;
      this.failureSearchMessage=false;
      this.successMessage=false;
      this.searched=false;
    }

  }
  changeDesc(desc: string) {
    this.desc = desc;
  }
}

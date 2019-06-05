import { Component } from '@angular/core';
import { CommService } from './services/comm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angrev';
   nom :string;
   mail :string;

   constructor(public srvComm : CommService){

   }

   onClickBtGet(){
      this.srvComm.getContact().subscribe ((ret :any)=>{
         console.log("RE: " + JSON.stringify(ret));
      } , (err : any)=>{
         console.error("ERR "+ JSON.stringify(err));
      });
   }

   onClickBtPost(){

console.log(this.nom + this.mail);

      this.srvComm.setContact({ nom: this.nom, "mail" : this.mail}).subscribe ( () =>{
         console.log("POST OK");
      } , (err) =>{
         console.error("POS KO " + JSON.stringify(err));
      });
   }

   onClickBtPostPromise(){
      this.srvComm.setContactPrm({ nom: "jack", "mail" : "jack@pirate.com"}).then(()=>{
         console.log("POST promise OK");
      }).catch((err)=>{
         console.error("POST promise KO" + JSON.stringify(err));

      });
   }

}

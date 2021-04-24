import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  buttonstatus=true;
  buttonstatus1=true;
  resultStatus=false;
  tossbuttonstatus=false;
  tossdbuttonstatus=false;
  winner=""
  tos=[];
  batTeam=[];

  constructor() { }
  teama=[{name:"Enter Name"}];
  teamb=[{name:"Enter Name"}];
  run="0";
  over=0;
  totalrun=0;
  totalover=0;
  balls=0;
  everyball=[];
  totalscore="";
  wkt=0;
  run1="0";
  over1=0;
  totalrun1=0;
  totalover1=0;
  balls1=0;
  everyball1=[];
  totalscore1="";
  wkt1=0;

  ngOnInit() {
  }

  addPlayer(team,index)
  {
    const value={name:"Enter Name"};
    if(team="teama")
    this.teama.splice(index, 0, value);
  }
  remPlayer(team,index)
  { if(this.teama.length>1)
    {
    if(team="teama")
    this.teama.splice(index, index);
    }
  }
  updateScore()
  {
    if(this.run!="out")
    {
      this.totalrun=this.totalrun+Number(this.run);
      this.totalscore=this.totalrun+"/"+this.wkt;
    }
    else
    {
      this.wkt++;
      this.totalscore=this.totalrun+"/"+this.wkt;
    }
    

    this.balls=this.balls+1;
    this.over=this.over+0.1;
    this.over=Number(this.over.toFixed(1));
    const value={over:this.over,run:this.run};
    this.everyball.push(value);
    if(this.balls%6==0)
    this.over=this.over+0.4;
    console.log(this.everyball);
    if(this.balls==this.totalover*6)
      this.buttonstatus=false;
    
  }
  updateScore1()
  {
    if(this.run1!="out")
    {
      this.totalrun1=this.totalrun1+Number(this.run1);
      this.totalscore1=this.totalrun1+"/"+this.wkt1;
    }
    else
    {
      this.wkt1++;
      this.totalscore1=this.totalrun1+"/"+this.wkt1;
    }
    if(this.totalrun1>this.totalrun)
    {
      this.buttonstatus1=false;
      this.winner=this.batTeam[1];
      this.resultStatus=true;
    }
    
    if(this.wkt1==10)
    {
      this.buttonstatus1=false;
      this.winner=this.batTeam[0];
      this.resultStatus=true;
    }
    

    this.balls1=this.balls1+1;
    this.over1=this.over1+0.1;
    this.over1=Number(this.over1.toFixed(1));
    const value={over:this.over1,run:this.run1};
    this.everyball1.push(value);
    if(this.balls1%6==0)
    this.over1=this.over1+0.4;
    console.log(this.everyball1);
    if(this.balls1==this.totalover1*6)
      {
        this.buttonstatus1=false;
        if(this.totalrun1>this.totalrun)
        this.winner=this.batTeam[1];
        else
        this.winner=this.batTeam[0];
        this.resultStatus=true;
      }
    
  }
  toss(team:String)
  {
    this.tossbuttonstatus=true;
this.tos.push(team);
if(this.tos[0]=='TEAM A')
this.tos.push('TEAM B');
else
this.tos.push('TEAM A');

  }

  tossD(dec:string)
  {this.tossdbuttonstatus=true;
    if(dec=='bat')
    {
    this.batTeam.push(this.tos[0])
    this.batTeam.push(this.tos[1])
    }
    else
    {
    this.batTeam.push(this.tos[1])
    this.batTeam.push(this.tos[0])
    }
  }
}

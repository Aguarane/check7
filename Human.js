import React from 'react';
class Human {
    name;
    job;
    skills;
    constructor(){
        this.name="";
        this.job="";
        this.skills=[];
    }
    getjob(a){
        this.job=a
    }
    leavejob(){
        this.job="unemployed"
    }
    learnNewSkill(b){
        this.skills.push(b)
    }
    forgetskill(c){
    this.skills = skills.filter(a =>{ return a!=c && a!=d})
    }

}
class student extends Human {
   
}
export default Human 
   

(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{dsxR:function(e,t,o){"use strict";o.r(t),o.d(t,"CoursModule",(function(){return u}));var r=o("ofXK"),s=o("tyNb"),n=o("fXoL"),i=o("HtAz");let c=(()=>{class e{constructor(e,t,o){this.courseService=e,this.route=t,this.router=o}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.course=this.courseService.getCourse(this.id)})}getCuorse(){return this.course}}return e.\u0275fac=function(t){return new(t||e)(n.Gb(i.a),n.Gb(s.a),n.Gb(s.b))},e.\u0275cmp=n.Ab({type:e,selectors:[["bk-cours"]],decls:18,vars:1,consts:[[1,"panel-group"],[1,"panel","panel-default"],[1,"panel-heading"],[1,"panel-title"],["data-toggle","collapse","routerLink","#collapse1"],["id","collapse1",1,"panel-collapse","collapse"],[1,"list-group"],[1,"list-group-item"],[1,"panel-footer"]],template:function(e,t){1&e&&(n.Kb(0,"h1"),n.fc(1),n.Jb(),n.Kb(2,"div",0),n.Kb(3,"div",1),n.Kb(4,"div",2),n.Kb(5,"h4",3),n.Kb(6,"a",4),n.fc(7,"Collapsible list group"),n.Jb(),n.Jb(),n.Jb(),n.Kb(8,"div",5),n.Kb(9,"ul",6),n.Kb(10,"li",7),n.fc(11,"One"),n.Jb(),n.Kb(12,"li",7),n.fc(13,"Two"),n.Jb(),n.Kb(14,"li",7),n.fc(15,"Three"),n.Jb(),n.Jb(),n.Kb(16,"div",8),n.fc(17,"Footer"),n.Jb(),n.Jb(),n.Jb(),n.Jb()),2&e&&(n.xb(1),n.hc(" ",t.getCuorse().name,""))},directives:[s.e],styles:[""]}),e})();const b=[{path:"",component:c},{path:"course/:id",component:o("Uc5N").a},{path:":id",component:c}];let l=(()=>{class e{}return e.\u0275mod=n.Eb({type:e}),e.\u0275inj=n.Db({factory:function(t){return new(t||e)},imports:[[s.f.forChild(b)],s.f]}),e})(),u=(()=>{class e{}return e.\u0275mod=n.Eb({type:e}),e.\u0275inj=n.Db({factory:function(t){return new(t||e)},imports:[[r.c,l]]}),e})()}}]);
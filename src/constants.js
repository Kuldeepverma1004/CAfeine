import { P1_DATA } from './data/p1'
import { P2_DATA } from './data/p2'

export const C = {
  bg:"#070709",s1:"#0F1015",s2:"#161820",s3:"#1D2030",
  b1:"#1E2230",b2:"#282E3E",b3:"#363D52",
  t1:"#EEEEF2",t2:"#9CA3AF",t3:"#5B6273",t4:"#363B47",
  am:"#E8A020",gr:"#22C55E",bl:"#60A5FA",rd:"#F87171",pu:"#A78BFA",te:"#2DD4BF"
}

export const STATUSES = [
  {val:0,code:"NS",label:"Not Started",color:"#3A3D45"},
  {val:1,code:"S1",label:"Studied Once",color:"#3B5BDB"},
  {val:2,code:"R1",label:"Revised Once",color:"#E8A020"},
  {val:3,code:"R2+",label:"Revised Twice+",color:"#22C55E"}
]

export const SUBJECTS = [
  {id:"p1",name:"Advanced Accounting",code:"P1",color:"#E8A020",chapters:P1_DATA,group:1,hasCase:false},
  {id:"p2",name:"Corporate & Other Laws",code:"P2",color:"#60A5FA",chapters:P2_DATA,group:1,hasCase:true},
  {id:"p3",name:"Taxation",code:"P3",color:"#FB923C",chapters:[],group:1,hasCase:false},
  {id:"p4",name:"Cost & Management Accounting",code:"P4",color:"#2DD4BF",chapters:[],group:2,hasCase:false},
  {id:"p5",name:"Auditing & Ethics",code:"P5",color:"#A78BFA",chapters:[],group:2,hasCase:false},
  {id:"p6",name:"FM & Strategic Management",code:"P6",color:"#4ADE80",chapters:[],group:2,hasCase:false},
]

export const ATTEMPTS = ["May 2026","Sep 2026","Jan 2027","May 2027"]

export const EXAM_DATES = {
  "May 2026": new Date("2026-05-04"),
  "Sep 2026": new Date("2026-09-15"),
  "Jan 2027": new Date("2027-01-11"),
  "May 2027": new Date("2027-05-03")
}

import web3 from "./web3";
const address = "0x569059f1235815A287C8FF5740A3230783c726C9";
const abi = [{"constant":false,"inputs":[{"name":"msgg","type":"string"}],"name":"addinglobalrequests","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"createcertify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ipfsha","type":"string"},{"name":"user","type":"address"},{"name":"ftype","type":"string"}],"name":"addinfilearray","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getglobalrequests","outputs":[{"name":"","type":"string[]"},{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getfilearray","outputs":[{"name":"","type":"string[]"},{"name":"","type":"address[]"},{"name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"Certification","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];
export default new web3.eth.Contract(abi, address);
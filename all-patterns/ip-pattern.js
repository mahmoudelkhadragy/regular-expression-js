/*
  make regex pattern match ip addresss 
*/

let ips = ["25.013.55.255", "192.32.1.1", "832.26.123.5", "0.1.12.1", "255.255.255.1"];

let regEx = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

let newArray = ips.map(elem => regEx.test(elem));

console.log(newArray);

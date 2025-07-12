let fs=require('fs')
var os=require('os')
var user=os.userInfo();

// console.log(user.username)
// console.log(user)

fs.appendFile('vinit.txt',"hi " +user.username +'\n',()=>{console.log('file is create')});

// console.log(os)
// console.log(fs)
function usernamefromemail(email){
    let username=email.slice(0,email.indexOf("@"));
    console.log(username);
}
usernamefromemail("sivareddy0930@gmail.com")
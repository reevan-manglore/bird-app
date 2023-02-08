function emailValidator(email){
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailPattern.test(email);
}

function userNameValidator(userName){
    const userNamePattern = /[\w\d_]{3,}/g;
    return userNamePattern.test(userName);
}


function passwordValidator(password){
    const passwordPattern = /[\w\d_]{6,}/g;
    return passwordPattern.test(password);
}


export {emailValidator,userNameValidator,passwordValidator};
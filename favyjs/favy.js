export class Name {
    //setter
    constructor(username){
        this.name = username;
        window.localStorage.setItem("name", this.name);
        this.savedname = window.localStorage.getItem("name");
    }
    //getter
    getname (){
        return `
        ${this.savedname}
        `;
    }

}
export class Email{
    constructor(useremail){
        this.email = useremail;
        window.localStorage.setItem("mail", this.email);
        this.savedmail = window.localStorage.getItem("mail");
    }

getemail(){
    return `
    ${this.savedmail}
    `;
}

}
export class Age {
    //setter
    constructor(userage){
        this.age = userage;
        window.localStorage.setItem("age", this.age);
        this.savedage = window.localStorage.getItem("age");
    }
    //getter
    getage (){
        return `
        ${this.savedage}
        `;
    }

}
export class Phone {
    //setter
    constructor(usernumber){
        this.number = usernumber;
        window.localStorage.setItem("num", this.number);
        this.savednumber = window.localStorage.getItem("num");
    }
    //getter
    getphone (){
        return `
        ${this.savednumber}
        `;
    }

}

export class Password {
    //setter
    constructor(usercode){
        this.code = usercode;
        window.localStorage.setItem("passcode", this.code);
        this.savedcode = window.localStorage.getItem("passcode");
    }
    //getter
    getpassword (){
        return `
        ${this.savedcode}
        `;
    }

}
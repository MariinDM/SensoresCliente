export interface User {
    email:string;
    password:string;
    isActivated:number;
    rolid:number;
}

export interface UserLogin {
    email:string;
    password:string;
}

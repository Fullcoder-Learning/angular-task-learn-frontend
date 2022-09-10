export interface User {
    email: string,
    password: string
}

export interface ResetEmail {
    email: string
}

export interface ResetPassword {
    newPassword: "",
    repitePassword: ""
}

// crear un nuevo interface para validar datos a actualizar del usuario:
export interface UserData{ // id y avatar serán opcionales
    _id?: string,
    email: string,
    password: string,
    name: string,
    lastname: string,
    avatar?: any
}
// 🔷 TYPESCRIPT DEMO
// This file shows Biome working with TypeScript

interface   User{
    id:number;
    name:string;
    email:string;
    age?:number;
}

type   Status="active"|"inactive"|"pending"

// Poorly formatted generic function
function   identity<T>(value:T):T{
return value
}

// Class with formatting issues
class   UserService{
    private users:User[]=[]

    constructor(){
        this.users=[]
    }

    addUser(user:User):void{
        this.users.push(user)
    }

    getUser(id:number):User|undefined{
        return this.users.find(u=>u.id===id)
    }

    getAllUsers():User[]{
        return this.users
    }

    // Unused private method (lint issue)
    private unusedMethod():void{
        console.log("I'm never called")
    }
}

// Type assertions
const someValue:any="this is a string"
const strLength:number=(someValue as string).length

// Enum
enum   Direction{
    Up=1,
    Down,
    Left,
    Right
}

// Async function with poor formatting
async function   fetchUser(id:number):Promise<User>{
    const response=await fetch(`/api/users/${id}`)
    const data=await response.json()
    return data as User
}

// Union types
function   formatValue(value:string|number|boolean):string{
    if(typeof value==="string"){
        return value.toUpperCase()
    }
    if(typeof value==="number"){
        return value.toFixed(2)
    }
    return String(value)
}

export{User,Status,UserService,Direction,fetchUser,formatValue,identity}

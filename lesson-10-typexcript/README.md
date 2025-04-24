WHAT IS TYPESCRIPT

TypeScript is a proggramming language that adds additional features on JavaScript
TypeScript = JavaScript + Type system

1- Basic Types
When we assign a variable, its value is converted to the value we give it, but we use TypeScript when we want it to be a spesific value

let age = 45 or "45" or true..

we can determine type of value we give to the variable with typescript so we can restrict the value written infront of it

e.g let age :number = 45
when we do this , the age variable cannot be assigned any value other than a number type.

e.g2 let firstName :string  = "Rumeysa"
in this vay the firstName variable cannot be assigned any value other than a string type

/------------------------------------------------------

2-'Any' usage
for example, we send a request to get tge  information of a user whose id is 5, but we dont know which type of age of the users age will come , then we use "any"

e.g let userAge :any =      ---it doesn't matter what type of value will come to this field

/-------------------------------------------------------

3-Union types "|"
used for allow more than one type

e.g let age :string | number | boolean

/--------------------------------------------------------

4-Literal types
looks like union types but, determines the  value that can come to the variable, not the type of the value

e.g let statusResult : 'pending' | 'approved' | 'rejected'

it means that one of these values will be suitable

statusResult = "pending" is ok, but statusResult = "Mehmet" is not

/--------------------------------------------------------

5-Array
we can also specify the type of an array

e.g let names :string[] = ["Rumeysa", "Furkan", "Hafsa", "Elif" ] or

let numbers :number[] = [1, 4, 6, 8, 5] we can do the same thing in a different way;

let numbers :Array<number> = [6, 7, 3, 8, 1]

to specify more than one vlaue type in the array;

let array :(string | number)[] = ["Rumi", 4, true]

/------------------------------------------------------

6-Interface and type
we can create our custom type using "type"

type User ={
    name: string
    age: number
} //so we have created our custom type, we can use it later

const object :User { //we used the type we created in an object
    name: "Fatih"
    age:34
} 
we cannot do this when we use our own created type;
 const array :User ["enes"]
 it is unacceptable because that is not the type we created
  
it is the best way to use it in the array;
 const array :User [{name: "Ayse", age: 34}] 

and we can create our custom type using "interface"

interface User{ //the difference from type is that we do not use "="
    name: string,
    age: number
}

const object User{
    name:"Rumeysa",
    age: 25
}

/---------------------------------------------------

7-Optional types "?"

interface User{
    name: string,
    age?: number
}
we define a type like this and if we use it, it is required to assign a value to age and name fields,
if we want to remove the necessity ot the age variable, we put a "?" in front of it


e.g const object User{
    name: "Ayse" //normally we would get an error due to we dont assign a value to the age variable, but in the type we created we made age optional
}

/-----------------------------------------------------

8-Functions
we can also determine the type of value of the parameters we define in the functions brackets

function addition(a,b) {
    console.log(a+b)
}
addition(3,"x")  //such value assignments are incorrect because x is not a number but a string. we use TypeScript to prevent this error and determine the value type that we will assign to parameters

-> e.g function addition (a:number, b: number){
    console.log(a+b)
}
const result = addition(4,6);
console.log(result);

-> e.g2 if we use return in the function and want to determine the type of the returned value, we do this:

function addition(a:number,b:number):number{
    //codes//
    return a+b;
} //through the ":number" that we wrote outside the parameter parentheses, we have determined the type of the value that will be returned with return, if we want one of the two types of values,we write this:
 "function addition(a:number,b:number):number | string"

-> e.g3 
function print(array: Array<string>){   // we determined the type of parameter as a string array, we can also do this; :string[]
array.forEach((value) => console.log(value))
}

let array: Array<string> = ["ayse","fatma","hayriye"]

print(array);

if our function will not return anything, we write ":void" after the parameter parenthesis

-> e.g4
    interface User{ //we defined a value type named "User"
    name:string,
    age:number
}

const obj1 :User {  //we defined an object with the user type
    name: "furkan",
    age: 27
}

const obj2 :User {
    name: "ayse",
    age: 25
}

let myArray :User[] = [obj1,obj2] //we created an array of type user and we placed our objects in it , we do not get an error because both objects and array are of User type

/-----------------------------------------------------

9-Generic types

function print(array :string[]){
    console.log(array)
}

print(["enes","ali","veli"]);
print([1,3,6,8,9]);
print([true,false])
//we called our function three time but only the first one will run because the array we gave as a parameter is of string type
//we need such a structure to accept all kinds of arrays;

function print<T>(array :T[]){ 
    console.log(array)
}
//Here, the "<T>" we use next to the function name and the ":T[]" we use next to the array parameter convert our function to a generic type. and if we will not return a value we write :void outside of the parameter bracets

-> e.g2
interface GenericType<T>{ //here, we determined a generic type
    name:string,
    age:number,
    salary: T[]
}

const obj1 GenericType<string>{ //salary should be string because we specified the object type as string
    name:"Rumeysa",
    age:25,
    salary["1000","4000","15000"]
}

const obj2 GenericType<number>{ //salary's value type should be number because we specified the object type as number
        name:"Rumeysa",
    age:25,
    salary[1000,4000,15000]
}

/---------------------------------------------
10-Extends types

interface CommonParts { //we defined a value type called CommonPart to exptend from it
    id:string,
    creationDate:string,
    creator:string
}

interface employee extends CommonParts{ //here, employee value type, extends from CommonParts
    employeeNo:string
}

interface institution extends CommonParts{
    institutionNo:string
}

const institue :institution = {
    id:"1"
    creationDate:"04.22.2025",
    creator:"Ahmet"
    institutionNo:"2564562"
}

/-----------------------------------------------

11-Partial, Required, ReadOnly, Pick, Omit

interface User {
    name:string,
    lastName:string,
    age:number,
    birthDate:string
}

---Partial

const user1 :Partial<User>{
    name:"Mehmet"
}  //normally, if we do this, we will get an error because in order for user1 to be of User type, all variables must be assigned value. but we have converted all variables to optional because we write ":Partial<User>" instead of ":User", it is okay that we do not assign values to them anymore.If we use ---"Required" we make all of them mandatory

---ReadOnly

const user2 :ReadOnly<User>{
    name:"Fatma",
    lastName:"Durmus",
    age:30,
    birthDate:"02/23/1995"
}
console.log(user2.name) //this is invalid because we add "ReadOnly" to user2

---Pick

const user3 :Pick<User, "name"> = { //The variable we select with "Pick" is made mandatory
    name:"Leyla"
} 
//Here we have selected name with pick, so it makes name mandatory.

---Omit

const user4 :Omit<User, "name"> ={ //when we use "Omit", it makes everyithing except the variable we choose mandatory, so it acts as if there is no name

}
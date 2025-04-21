location.href = ""  --> To add Location
location.reload()  --> To Refresh
history.forward()
history.backward()

# Local storage

localStorage.setItem("key","value");
localStorage.getItem("key);
localStorage.removeItem("key);
localStorage.clear();

# set array or objects in the form of string
if user is a array,then stringify it
to convert in string use JSON.stringify([1,2,3])

let user = [1,2,3];
let newUser  = JSON.stringify(user)

localStorage.setItem("users",user)  ❌ (Gadbadi hai bhaiya Pehle string banana hoga)
localStorage.setItem("users",newUser)  ✔️

let getUser = localStorage.getItem("users")  --> (String hi aa jayega na ki array ya object)
let parsedUser = JSON.parse(users);          --> (Ab string ko convert kiya array ya object me)
console.log(parsedUser);                     --> (Ab parsed ko use kr liya)


# For Setting Array or Objects in LocalStorage
data --> JSON.stringify() --> setItem to localStorage

# For getting Array or Objects in LocalStorage
getItem --> JSON.parse() --> use parsed data

# Note : LocalStorage me sirf String rehta hai

# Session Storage
same as localStorage but get vanished after closing tab

# Cookie
document.cookie = "user = Tarique; expire"

# Class List
div.classList.add("circle")
div.classList.remove("circle")
div.classList.toggle("circle")

# Todays topic
1. localStorage
2. sessionStorage
3. Cookies

4. windowObject
5. Child nodes
6. classList

# Task - Make a webpage with feature light and dark mode with the help of classlist and local storage
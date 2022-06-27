let password = "Hooyomaocan2021"

if (password.length > 10 && password.length < 20 ){
    console.log("Accepted! Password is between 10 and 20 characters long.")
} else console.log("Password not created. Password should be etween 10 and 20 characters long.")

const splitstr = password.split('')
console.log(splitstr)

for (let i = 0; i< splitstr.length-1; i++) {
    if (splitstr.toLowerCase === splitstr[(i)]){
        console.log("Password must contain at least one lower case character")
    } else console.log("Password contains at least one lower case character")
}
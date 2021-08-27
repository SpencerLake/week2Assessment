console.log('Welcome to the password validator tool!')

console.log('Please enter password')
validate('kjhgd5')

function validate(pass){
    console.log(pass)
    for(let i = 0; i < 1; i++){
    if(pass.length >= 10){
        console.log('success!')
    } else {
        console.log('failure!')
    }
}
}


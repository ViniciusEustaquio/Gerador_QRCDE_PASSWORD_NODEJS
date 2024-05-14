
async function handle () {
    
    let characteres = [];
    let password = "";
    const passwordLength = process.env.PASSWORD_LENGTH
    
    if(process.env.UPPERCASE_LETTERS === 'true') {
        characteres.push(...'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z')
    }
    
    if(process.env.LOWERCASE_LETTERS = 'true') {
        characteres.push(...'abcdefghijklmnopqrstuvwxyz')
    }
    
    if(process.env.NUMBERS = 'true') {
        characteres.push(...'123456789')
    }
    
    if(process.env.SPECIAL_CHARACTERS = 'true') {
        characteres.push(...'!@#$%^&*()_+-=[]{}|;:<>?/')
    }
    
    for(let i = 0; i < passwordLength; i++){
    const index = Math.floor(Math.random() * characteres.length)       
    password += characteres[index]; 
    }
    
    return password
}


export default handle
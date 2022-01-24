export const validate = (user) => {
    if(user.firsName !== '') {
        console.log('Users firstname looks good');
        return true
    }
    else {
        console.log('All users must have a firstname');
        return false
    }
}

export const hasNumber = string => {
    return /\d/.test(string)
}
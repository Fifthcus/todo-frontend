interface signInObj {
    email: string
    password: string,
}

const SignIntoAccount = (signInAccount: signInObj) => {
    console.log(signInAccount);
}

export default SignIntoAccount
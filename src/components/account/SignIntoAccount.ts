interface signInObj {
    email: string
    password: string,
}
interface resObj {
    message: string,
    statusCode: number
}
const SignIntoAccount = async (account: signInObj) => {
    try{
        const response = await fetch("http://localhost:3000/user/signin", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({email: account.email, password: account.password}),
        });
        const json: {message: string} = await response.json();
        const resObj: resObj = {message: json.message, statusCode: response.status};
        return resObj;
    } catch(error: any) {
        console.log(error);
    }
}

export default SignIntoAccount
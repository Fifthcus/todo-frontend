interface signInObj {
    email: string
    password: string,
}
interface ServerResponse {
    message: string,
    statusCode: number
}
const SignIntoAccount = async (account: signInObj): Promise<ServerResponse> => {
    try{
        const response = await fetch("http://localhost:3000/user/signin", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({email: account.email, password: account.password}),
        });
        const json: {message: string} = await response.json();
        return {message: json.message, statusCode: response.status};
    } catch(error: any) {
        console.log(error);
    } finally {
        return {message: "An unexpected error has occured.", statusCode: 500};
    }
}

export default SignIntoAccount
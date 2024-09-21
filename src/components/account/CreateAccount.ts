interface newAccountObj {
    username: string,
    email: string
    password: string,
    verifyPassword: string,
}

interface ServerResponse {
    message: string,
    statusCode: number
}

const CreateAccount = async (account: newAccountObj): Promise<ServerResponse> => {
    try{
        const request = await fetch("http://localhost:3000/user/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({username: account.username, email: account.email, password: account.password}),
        });
        const response = await request.json();
        return {message: response.message, statusCode: request.status};
    } catch(error: any) {
        console.log(error);
    } finally {
        return {message: "An unexpected error has occured.", statusCode: 500};
    }
}

export default CreateAccount
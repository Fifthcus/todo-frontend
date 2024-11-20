interface newAccountObj {
    username: string,
    email: string
    password: string,
    verifyPassword: string,
}

interface ServerResponse {
    ok: boolean,
    user?: any,
    statusCode: number,
    message: string,
}

const CreateAccount = async (account: newAccountObj): Promise<ServerResponse> => {
    try{
        const response = await fetch("http://localhost:3000/user/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({username: account.username, email: account.email, password: account.password}),
        });
        const json: { message: string, user: any } = await response.json();
        return { ok: response.ok, user: json.user, statusCode: response.status, message: json.message };
    } catch(error: any) {
        console.log(error);
        return { ok: false, statusCode: 500, message: "An unexpected error occured." };
    }
}

export default CreateAccount
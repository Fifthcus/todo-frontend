interface newAccountObj {
    username: string,
    email: string
    password: string,
    verifyPassword: string,
}

const CreateAccount = async (account: newAccountObj) => {
    try{
        const response = await fetch("http://localhost:3000/user/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({username: account.username, email: account.email, password: account.password}),
        });
        const json = await response.json();
        return json;
    } catch(error: any) {
        console.log(error);
    }
}

export default CreateAccount
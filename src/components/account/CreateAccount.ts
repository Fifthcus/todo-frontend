interface newAccountObj {
    username: string,
    email: string
    password: string,
    verifyPassword: string,
}

const CreateAccount = async (newAccount: newAccountObj) => {
    try{
        const response = await fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({username: newAccount.username, email: newAccount.email, password: newAccount.password},
            ),
        });
        const json = await response.json();
        return json;
    } catch(error: any) {
        console.log(error);
    }
}

export default CreateAccount
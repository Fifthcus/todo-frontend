import { useState, useEffect } from "react";

interface newAccountObj {
    username: string,
    email: string
    password: string,
    verifyPassword: string,
}

const useCreateAccount = (newAccount: newAccountObj) => {
    console.log(newAccount);
}

export default useCreateAccount
import { useState, useEffect } from "react";

interface signInObj {
    email: string
    password: string,
}

const useSignIntoAccount = (signInAccount: signInObj) => {
    console.log(signInAccount);
}

export default useSignIntoAccount
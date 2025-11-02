const base_url = " http://localhost:8000/auth/"

export const registerUser= async(registerFormData)=>{
    try{
        const response = await fetch(base_url+"register/",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerFormData),
        });
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const newUser = await response.json()
        return newUser;
    }catch(error){
        console.log("Registration faild",error.message)
    }
};


export const loginUser=async(loginFormData)=>{
    try{
        const response = await fetch (base_url+"login/",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginFormData),
        });
        if(!response.ok){
            throw new Error(`Repsponse status: ${response.status}`);
        } 
        const data= await response.json()
        return data;
    }catch(error){
        console.log(error)
    }
}
export const getUser = async(token)=>{
    try{
        const userRes = await fetch(base_url+"me/",{
            headers:{Authorization: `Token ${token}`},
        });
        const user = await userRes.json();
        return user
    }catch(error){
        console.log(error)
    }
}
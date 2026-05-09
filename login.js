const supabaseUrl =
'https://fmlitydfcydcnnumhmyo.supabase.co';

const supabaseKey =
'YOUR_ANON_KEY';

const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

/* SIGN UP */

async function signUp(){

    const email =
        document.getElementById("signup-email").value;

    const password =
        document.getElementById("signup-password").value;

    const { data, error } =
        await supabase.auth.signUp({
            email: email,
            password: password
        });

    if(error){
        alert(error.message);
    }
    else{
        alert("Account Created Successfully");
    }

}

/* SIGN IN */

async function signIn(){

    const email =
        document.getElementById("signin-email").value;

    const password =
        document.getElementById("signin-password").value;

    const { data, error } =
        await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

    if(error){
        alert(error.message);
    }
    else{

        alert("Login Successful");

        window.location.href = "index.html";

    }

}

const supabaseUrl =
"https://fmlitydfcydcnnumhmyo.supabase.co";

const supabaseKey =
"YOUR_SUPABASE_KEY";

const supabaseClient =
window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

/* SIGN UP */

async function signUp(){

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const { error } =
    await supabaseClient.auth.signUp({

        email,
        password,

        options:{
            data:{
                name:name
            }
        }

    });

    if(error){

        document.getElementById("message")
        .innerText = error.message;

    }else{

        document.getElementById("message")
        .innerText =
        "Account created successfully!";

    }

}

/* SIGN IN */

async function signIn(){

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const { data, error } =
    await supabaseClient.auth
    .signInWithPassword({

        email,
        password

    });

    if(error){

        document.getElementById("message")
        .innerText = error.message;

    }else{

        window.location.href =
        "dashboard.html";

    }

}

const supabaseUrl =
'https://fmlitydfcydcnnumhmyo.supabase.co';

const supabaseKey =
'sb_publishable_WX8hbbfYCzNZIVqvq5Wsjw_LrABY0eZ';

const client =
window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

async function addListing(){

    const title =
    document.getElementById("title").value;

    const description =
    document.getElementById("description").value;

    const price =
    document.getElementById("price").value;

    const image =
    document.getElementById("image").value;

    const type =
    document.getElementById("type").value;

    const { error } =
    await client
    .from("listings")
    .insert([
        {
            title: title,
            description: description,
            price: price,
            image_url: image,
            type: type
        }
    ]);

    if(error){

        console.log(error);

        alert(error.message);

    }else{

        alert("Listing Published!");

    }

}

const whatsapp =
document.getElementById("whatsapp").value;

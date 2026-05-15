const supabaseUrl =
'https://fmlitydfcydcnnumhmyo.supabase.co';

const supabaseKey =
'sb_publishable_WX8hbbfYCzNZIVqvq5Wsjw_LrABY0eZ';

const client =
window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

/* LOAD LISTINGS */

async function loadListings(){

    const listingsContainer =
    document.getElementById("listings");

    const { data, error } =
    await client
    .from("listings")
    .select("*");

    if(error){

        console.log(error);

        return;
    }

    listingsContainer.innerHTML = "";

    data.forEach(item => {

        listingsContainer.innerHTML += `

        <div class="card">

            <img
                src="${item.image_url}"
                style="
                    width:100%;
                    height:200px;
                    object-fit:cover;
                    border-radius:15px;
                    margin-bottom:15px;
                "
            >

            <h2>${item.title}</h2>

            <p>
                ${item.description}
            </p>

            <br>

            <h3>
                $${item.price}
            </h3>

            <p>
                ${item.type}
            </p>

        </div>

        `;
    });

}

loadListings();

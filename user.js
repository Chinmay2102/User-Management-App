let usersData =  JSON.parse(localStorage.getItem("data"));

 let usercnt =  document.getElementById("usercnt");
 usercnt.innerHTML = `
<div class="card">
            <div class="top">
                <h1>${usersData.id}</h1>
            </div>
            <div class="bottom">
                <label for="name">Name:</label>
                <h1>${usersData.name}</h1>

                <label for="phone">phone no:</label>
                <h1>${usersData.phone}</h1>

                <label for="email">email:</label>
                <h1>${usersData.email}</h1>

                <label for="name">company name:</label>
                <h1>${usersData.company["name"]}</h1>
            </div>

            

        </div>
 `
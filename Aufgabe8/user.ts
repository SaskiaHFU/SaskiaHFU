//User anzeigen

let dataButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("dataButton");
dataButton.addEventListener("click", getUsers);

async function getUsers(): Promise <void> {

    let response: Response = await fetch(url + "user");
    let users: User[] = await response.json();

    let usersDiv: HTMLElement = document.getElementById("users");

    let userCount: number = 0;



    for (let user of users) {

        let userDiv: HTMLDivElement = document.createElement("div");

        // let attributes: Map <string, string> = new Map <string, string> ();
        // attributes.set("Vorname: ", user.vorname);
        // attributes.set("Nachname: ", user.nachname);
        // attributes.set("Email ", user.email);

        userDiv.innerText = `vorname: ${user.vorname} ${user.nachname} ${user.email}  `;
        console.log(user);

        usersDiv.appendChild(userDiv); 
        userCount++;
    }
    
    
}
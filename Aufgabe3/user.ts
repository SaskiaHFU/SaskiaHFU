//User anzeigen

let dataButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("dataButton");
dataButton.addEventListener("click", getUsers);

async function getUsers(): Promise <void> {

    let response: Response = await fetch(url + "user");
    let users: User[] = await response.json();

    let userDiv: HTMLElement = document.getElementById("users");

    let userCount: number = 0;

    for (let user of users) {

        let userDiv: HTMLDivElement = document.createElement("div");

        let attributes: Map <string, string> = new Map <string, string> ();
        attributes.set("Vorname: ", user.Vorname);
        attributes.set("Nachname: ", user.Nachname);
        attributes.set("Email ", user.Email);

    }

    userDiv.appendChild(userDiv);
    userCount++;
    
}

const callRoute = async (event) => {
    const username = document.querySelector("#postblock").className;


    const useremail = sessionStorage.getItem("login"); //This should return an object containing username: email

    let userId = await fetch(`/api/users/${useremail.username}`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    });

    let postContent = await fetch(`/dashboard`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    });

}
Window.onload = callRoute();
// document.querySelector('.dashboard').addEventListener('load', callRoute);
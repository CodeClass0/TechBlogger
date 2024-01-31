const callRoute = async (event) => {
    const username = document.querySelector("#postblock").className;

    let userId = await fetch(`/api/users/${username}`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    });
    
    let postContent = await fetch(`/dashboard`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    });

}
// window.onload = () => {alert();}
document.querySelector('.dashboard').addEventListener('load', callRoute());
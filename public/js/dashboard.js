const callRoute = async (event) => {
    alert();
    let postContent = await fetch(`/dashboard`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    });
    alert(postContent);
}

document.querySelector('.dashboard').addEventListener('load', callRoute);
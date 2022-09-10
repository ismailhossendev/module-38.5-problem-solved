function getInput(id) {
    const input = document.getElementById(id).value;
    return input
}

const setBtn = (id,name) => {
    const input = getInput(id);
    localStorage.setItem(name, input);
}
const deleteBtn = key => {
    localStorage.removeItem(key);
}
const resetBtn = () => {
    localStorage.clear();
}

const sentBtn = () => {
    const name = getInput('name-input');
    const email = getInput('email-input');
    const text = getInput('text-input');
    const details = { name: name, email: email, text: text };
    const stringDetails = JSON.stringify(details);
    localStorage.setItem('massage', stringDetails);
}

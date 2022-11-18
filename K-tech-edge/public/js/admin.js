const formCreateUser = document.getElementById('createUser');
const inputUserName = document.getElementById('userName');
// const inputPassword = document.getElementById('password');
const inputEmail = docoment.getElementById('email');
const inputGitHub = document.getElementById('github');
const inputFName = document.getElementById('fullName');
const dataBlock = document.getElementById('index_data_block');

formCreateUser.addEventListener('submit', (e) => {
        // prevent page from refreshing.
        e.preventDefault();
        fetchData();
});

async function createUser(){
    try {
        if((!inputUserName.value) || (!inputEmail.value) || (!inputGitHub.value) || (!inputFName.value)){
            dataBlock.innerHTML = "יש למלא את כל השדות";
        }else {
            const URL = `http://localhost:3000/admin?userName=${inputUserName.value}&email=${inputEmail.value}&github=${inputGitHub.value}&FName=${inputFName.value}`;
            let res = await fetch(URL);
            if(res.ok){
                dataBlock.innerHTML = "נוצר כותב חדש";
            }else{
                throw new Error();
            }
        }
        
    } catch (error) {
        dataBlock.innerHTML = error.massage;
        console.log(error);
    }
}


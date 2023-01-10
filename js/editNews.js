const button = document.getElementById('button');
const input = document.getElementById('input__file');
const files = this.files;

button.addEventListener('click', (e) => {
    input.click();
    showFiles(files);
});

input.addEventListener('change', (e) => {
    files = this.files;
});

function showFiles(files) {
    if(files.lenth === undefined) {
        proccessFile(files);
    }else{
        for(const file of files) {
            proccessFile(file);
        }
    }
}

function proccessFile(file) {
    const docType = file.type;
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

    if(validExtensions.includes(docType)){
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;

        fileReader.addEventListener('load', e => {
            const fileUrl = fileReader.result;
            const image = `
                <div id='${id}' class='file-container'>
                    <img src='${fileUrl}' alt='${file.name}' whidth='50px'>
                </div>
                `;
                const html = document.querySelector('#preview').innerHTML;
                document.querySelector('#preview').innerHTML = image + html;
        });
        fileReader.readAsDataURL(file);
        uploadFile(file, id);
    }else {
        alert('No es un archivo válido');
    }
}

async function uploadFile(file, id) {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData,
        });

        const responseText = await response.text();
        console.log(responseText);

        document.querySelector(
            `#${id} .status-text`
            ).innerHTML = `<span class='success'>ARCHIVO SUBIDO CORRECTAMENTE</span>`;

    } catch (error) {
        document.querySelector(
            `#${id} .status-text`
            ).innerHTML = `<span class='failure'>EL ARCHIVO NO SE PUDO SUBIR</span>`;
    }
}
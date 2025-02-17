document.getElementById('photo').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('preview').src = reader.result;
        document.getElementById('preview').style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
});

function printForm() {
    window.print();
}

function submitForm() {
    const form = document.getElementById('registrationForm2');
    const data = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbwc9t03wioFhmZqLCE2zWIzZVi4lXYxBVQoL0b7vTurm2I1jRzA4QhnnOvad5DGEXTe4w/exec', { 
        method: 'POST',
        body: data
    })
    .then(response => response.text())
    .then(result => {
        alert(result);
        window.print(); 
    })
    .catch(error => {
        console.error('Error:', error);
        alert('حدث خطأ أثناء التسجيل.');
    });
}

/**
 * by natanael   medina
 * logica modulo contact client side
 * 22-11-2018
 */

$('.contact .ui.form')
    .form({
        fields: {
            email: {
                identifier: 'email',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Porfvor digita tu email'
                    },
                    {
                        type: 'email',
                        prompt: 'El email es invalido'
                    }
                ]
            },
            password: {
                identifier: 'password',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'contraseña vacia ! digita tu contraseña'
                    },
                    {
                        type: 'length[6]',
                        prompt: 'la contraseña debe tener 6 caracteres'
                    }
                ]
            }
        }
    });

$('.contact button').on('click', function (e) {
    $('.dimmer').transition('scale');
   //clase del profesor -------------
    e.preventDefault();

    var lsit = $('.contact input,.contact textarea');
    lsit.each(e => {
        console.log(this.name === 'autor' ? (this.value === '' ? 'anonimo' : this.value) : this
        .value);
    },lsit);

    var parent = this.parentNode,
        form = new FormData(parent),
        h = new Headers();
 // fin clase del profesor -------------

    h.append('token', localStorage.getItem('token'));

    fetch('/contacto', {
        method: 'post',
        body: form,
        headers: h
    }).then(function (Response) {
        console.log(Response);
        Response.json().then(function (data) {
            $.uiAlert({
                textHead: 'Informacion',
                text: data.message,
                bgcolor: data.message.indexOf('Error') === 0 ? 'red' : '#19c3aa',
                textcolor: '#fff',
                position: 'bottom-right', // top And bottom ||  left / center / right
                icon: data.message.indexOf('Error') === 0 ? 'exclamation triangle' : 'checkmark box',
                time: 3
            });

        });
        if (Response.status >= 200 && Response.status <= 400) {
            $('.contact .ui.form').form('clear');
            $('.dimmer').transition('scale');
        }
    })
        .catch(function (error) {
            $('.dimmer').transition('scale');
            console.log(error)
        })
});
$('a[href="/login"]').on('click', function (e) {
    e.preventDefault();
    function showLogin(data) {
        if (!data) {
            data = $('.login-form');
        } else {
            data = $(data);
        }
        var form = data.find('form');
        form.form({
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
        data.modal({
            closable: true, transition: 'fly up',
            onApprove: function (e) {
                form.form('validate form');
                return false;
            }
        });
        data.modal('show');

        //data.find('.column').hide();
        // data.find('.column').transition('fly up');
        history.pushState({ type: "login" }, "login", "login");

    }
    if ($('.login-form').length > 0) {
        showLogin()
    } else
        $.get('login/body').done(function (data) {
            showLogin(data)
        });


});
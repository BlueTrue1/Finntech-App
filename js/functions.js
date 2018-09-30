
$(document).ready(function () {

    $('.popopo').popup({
        inline: true,
        closable: true,
        on: "click"
    });

    $('.popopo-right').popup({
        inline: true,
        closable: true,
        on: "click",
        position: "top right"
    });

    $('.ui.accordion')
        .accordion();

    $('.ui.form')
        .form({
            fields: {
                name: {
                    identifier: 'name',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter your name'
                        }
                    ]
                },
                skills: {
                    identifier: 'skills',
                    rules: [
                        {
                            type: 'minCount[2]',
                            prompt: 'Please select at least two skills'
                        }
                    ]
                },
                gender: {
                    identifier: 'gender',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please select a gender'
                        }
                    ]
                },
                username: {
                    identifier: 'username',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter a username'
                        }
                    ]
                },
                password: {
                    identifier: 'password',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter a password'
                        },
                        {
                            type: 'minLength[6]',
                            prompt: 'Your password must be at least {ruleValue} characters and contain a number'
                        }
                    ]
                },
                terms: {
                    identifier: 'terms',
                    rules: [
                        {
                            type: 'checked',
                            prompt: 'You must agree to the terms and conditions'
                        }
                    ]
                }
            }
        })
    ;
});
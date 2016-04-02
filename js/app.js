
jQuery(function () {

    "use strict";

    new Vue({
        el: '#abstract-handler',

        data: {
            editAbstract: false,
            abstracts: []
        },

        methods: {
            add: function () {
                var abstract = {
                    AbstID: 0,
                    AbstTitle: '',
                    AbstDesc: ''
                };
                this.abstracts.push(abstract);
                this.edit(abstract);
            },
            edit: function (abstract) {
                this.editAbstract = abstract;
            },
            remove: function (abstract) {
                var vm = this;
                UIkit.modal.confirm('Are you sure?', function () {
                    vm.abstracts.$remove(abstract);
                });
            },
            save: function () {
                var vm = this;
                jQuery.post('echo.php', {abstracts: this.abstracts}, function (res) {
                    vm.$set('abstracts', res.abstracts);
                    vm.editAbstract = false;
                }, 'json');
            }
        }
    });

});

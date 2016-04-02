
jQuery(function () {

    "use strict";

    new Vue({
        el: '#abstract-handler',

        data: {
            editModal: {},
            editAbstract: false,
            abstracts: []
        },

        events: {
            'hook:ready': function () {
                this.editModal = UIkit.modal(this.$els.modalEdit, {bgClose: false});
            }
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
            cancel: function () {
                this.editAbstract = false;
                this.editModal.hide();
            },
            edit: function (abstract) {
                this.editAbstract = abstract;
                this.editModal.show();
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
                    vm.editModal.hide();
                }, 'json');
            }
        }
    });

});

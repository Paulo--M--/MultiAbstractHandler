
jQuery(function () {

    "use strict";

    new Vue({
        el: '#abstract-handler',

        data: {
            abstracts: []
        },

        methods: {
            add: function () {
                this.abstracts.push({
                    AbstTitle: ''
                });
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
                }, 'json');
            }
        }
    });

});

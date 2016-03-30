
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
            }
        }
    });

});

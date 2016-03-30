
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
            }
        }
    });

});

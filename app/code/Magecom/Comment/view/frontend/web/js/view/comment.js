define(
    [
        'ko',
        'uiComponent'
    ],
    function (ko, Component) {
        "use strict";

        return Component.extend({
            defaults: {
                template: 'Magecom_Comment/comment'
            },
            isRegisterComment: true
        });
    }
);
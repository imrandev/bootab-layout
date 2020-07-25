var bootabLayout = angular.module('bootab.directives', []);

bootabLayout.directive('tabLayout', function () {
    return {
        restrict: 'E',
        scope: {
            columns: "=columns",
            fragments: "=fragments",
            controllers: "=controllers",
            selectedIndex: "=selectedIndex",
            alignment: "@",
            icons: "=icons",
            data: "=data",
            containerUrl: "@"
        },
        replace: true,
        template: "<div ng-include='containerUrl'></div>",
        controller: function ($scope) {
            $scope.selectedIndex = 0;
            $scope.toggleTab = function (index) {
                var currentTabId = '#tab' + index;
                var children = $('.nav-tabs').children('li');
                children.each(function (i) {
                    if (i === index){
                        $( currentTabId ).addClass( "active" );
                    } else {
                        $( "#tab" + i ).removeClass( "active" );
                    }
                });
                // update the selected tab index
                $scope.selectedIndex = index;
            };
        }
    };
});

bootabLayout.directive('tabContainer', function () {
    return {
        restrict: 'E',
        scope: {
            templateUrl: '@',
            form: '@',
            ctrl: '='
        },
        replace: true,
        template: '<div ng-include="templateUrl"></div>',
        controller: ['$controller', '$scope', function($controller, $scope) {
            return $controller($scope.ctrl, {$scope: $scope});
        }],
        controllerAs: 'tabController',
        link: function ($scope, $element, $attrs, $ctrl) {
            console.log($scope.ctrl);
        }
    };
});

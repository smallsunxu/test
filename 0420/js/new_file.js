angular.module('BlankApp', ['ngMaterial']);
angular.module('BlankApp')
.controller('AppCtrl', function($scope) {
});
angular.module('BlankApp')
.controller('AppCtrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;
});

angular.module('BlankApp')
.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.toggleRight = buildToggler('right');
  $scope.isOpenRight = function(){
    return $mdSidenav('right').isOpen();
  };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
     function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
        args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
     function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
      }
    }
  })
.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    $mdSidenav('right').close()
    .then(function () {
      $log.debug("close RIGHT is done");
    });
  };
});

angular.module('BlankApp')
.config(function($mdIconProvider) {
  $mdIconProvider
  .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
})
.controller('AppCtrl2', function($scope) {
  var imagePath = 'img/list/60.jpeg';

  $scope.todos = [
  {
    face : imagePath,
    what: 'Brunch this weekend?',
    who: 'Min Li Chan',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  },
  {
    face : imagePath,
    what: 'Brunch this weekend?',
    who: 'Min Li Chan',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  },
  {
    face : imagePath,
    what: 'Brunch this weekend?',
    who: 'Min Li Chan',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  },
  {
    face : imagePath,
    what: 'Brunch this weekend?',
    who: 'Min Li Chan',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  },
  {
    face : imagePath,
    what: 'Brunch this weekend?',
    who: 'Min Li Chan',
    when: '3:08PM',
    notes: " I'll be in your neighborhood doing errands"
  },
  ];
});

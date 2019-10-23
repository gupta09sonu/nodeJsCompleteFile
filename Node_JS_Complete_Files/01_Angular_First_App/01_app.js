// Create a Module
let app = angular.module('FirstApp',[]);

// Create a Controller
app.controller('FirstAppCtrl',function($scope) {
    $scope.username = null;
});

// Create a Controller
app.controller('LikesCtrl',function($scope) {
    $scope.likes = 0;
    $scope.liked = function() {
        $scope.likes++;
    };

    $scope.dislikes = 0;
    $scope.disliked = function() {
        $scope.dislikes++;
    };
});

// Create a Controller
app.controller('SelectCtrl',function($scope) {
    $scope.option = null;
});

// Create a Controller
app.controller('WishMsgCtrl',function($scope) {
    $scope.number = null;
    $scope.message = null;
    $scope.displayMessage = function() {
        if($scope.number !== null){
            if($scope.number >= 0 && $scope.number <= 12){
                $scope.message = 'Good Morning';
            }
            else if($scope.number >12 && $scope.number <= 17){
                $scope.message = 'Good Afternoon';
            }
            else if($scope.number >17 && $scope.number <= 23){
                $scope.message = 'Good Evening';
            }
            else{
                $scope.message = 'Enter Proper Time';
            }
        }
        else{
            $scope.message = '';
        }
    }
});
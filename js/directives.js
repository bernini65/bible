var bibleDirectives = angular.module('bibleDirectives', []);

bibleDirectives.directive('menuLink', function(){
	return {
		link: function (scope, elem, attrs) {
			elem.bind('click',function(){
				var chapters = ' \
				<div layout="row" layout-wrap> \
                     <md-button ng-repeat="chapter in {{scope.chapters}} | limitTo: 30 track by chapter.id" class="md-primary" >{{::chapter.id}}</md-button> \
                </div> ';

                var test = ' \
				<div layout="row" layout-wrap> \
                      <md-button class="md-primary">1 2 3 4 5</md-button>\
                </div> ';
                console.log(test);
                	elem.append(test);

			});
			
		}
	}
});

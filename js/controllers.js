


var bibleControllers = angular.module('bibleControllers', ['ngSanitize']);

bibleControllers.controller('bibleCtrl', function($scope, $templateCache, $http){
  //$scope.books=["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther","Job", "Psalm", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy","Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];
 //$scope.books=["Genesis", "Exodus"]
  // $scope.books=[{'name':'Genesis','chapters':1},{'name':'Leviticus','chapters':40}]
    $scope.books=[{"chaptersArr": [], "limit": 0, "name": "Genesis", "id": "eng-ESV:Gen"}, {"chaptersArr": [], "limit": 0, "name": "Exodus", "id": "eng-ESV:Exod"}, {"chaptersArr": [], "limit": 0, "name": "Leviticus", "id": "eng-ESV:Lev"}, {"chaptersArr": [], "limit": 0, "name": "Numbers", "id": "eng-ESV:Num"}, {"chaptersArr": [], "limit": 0, "name": "Deuteronomy", "id": "eng-ESV:Deut"}, {"chaptersArr": [], "limit": 0, "name": "Joshua", "id": "eng-ESV:Josh"}, {"chaptersArr": [], "limit": 0, "name": "Judges", "id": "eng-ESV:Judg"}, {"chaptersArr": [], "limit": 0, "name": "Ruth", "id": "eng-ESV:Ruth"}, {"chaptersArr": [], "limit": 0, "name": "1 Samuel", "id": "eng-ESV:1Sam"}, {"chaptersArr": [], "limit": 0, "name": "2 Samuel", "id": "eng-ESV:2Sam"}, {"chaptersArr": [], "limit": 0, "name": "1 Kings", "id": "eng-ESV:1Kgs"}, {"chaptersArr": [], "limit": 0, "name": "2 Kings", "id": "eng-ESV:2Kgs"}, {"chaptersArr": [], "limit": 0, "name": "1 Chronicles", "id": "eng-ESV:1Chr"}, {"chaptersArr": [], "limit": 0, "name": "2 Chronicles", "id": "eng-ESV:2Chr"}, {"chaptersArr": [], "limit": 0, "name": "Ezra", "id": "eng-ESV:Ezra"}, {"chaptersArr": [], "limit": 0, "name": "Nehemiah", "id": "eng-ESV:Neh"}, {"chaptersArr": [], "limit": 0, "name": "Esther", "id": "eng-ESV:Esth"}, {"chaptersArr": [], "limit": 0, "name": "Job", "id": "eng-ESV:Job"}, {"chaptersArr": [], "limit": 0, "name": "Psalm", "id": "eng-ESV:Ps"}, {"chaptersArr": [], "limit": 0, "name": "Proverbs", "id": "eng-ESV:Prov"}, {"chaptersArr": [], "limit": 0, "name": "Ecclesiastes", "id": "eng-ESV:Eccl"}, {"chaptersArr": [], "limit": 0, "name": "Song of Solomon", "id": "eng-ESV:Song"}, {"chaptersArr": [], "limit": 0, "name": "Isaiah", "id": "eng-ESV:Isa"}, {"chaptersArr": [], "limit": 0, "name": "Jeremiah", "id": "eng-ESV:Jer"}, {"chaptersArr": [], "limit": 0, "name": "Lamentations", "id": "eng-ESV:Lam"}, {"chaptersArr": [], "limit": 0, "name": "Ezekiel", "id": "eng-ESV:Ezek"}, {"chaptersArr": [], "limit": 0, "name": "Daniel", "id": "eng-ESV:Dan"}, {"chaptersArr": [], "limit": 0, "name": "Hosea", "id": "eng-ESV:Hos"}, {"chaptersArr": [], "limit": 0, "name": "Joel", "id": "eng-ESV:Joel"}, {"chaptersArr": [], "limit": 0, "name": "Amos", "id": "eng-ESV:Amos"}, {"chaptersArr": [], "limit": 0, "name": "Obadiah", "id": "eng-ESV:Obad"}, {"chaptersArr": [], "limit": 0, "name": "Jonah", "id": "eng-ESV:Jonah"}, {"chaptersArr": [], "limit": 0, "name": "Micah", "id": "eng-ESV:Mic"}, {"chaptersArr": [], "limit": 0, "name": "Nahum", "id": "eng-ESV:Nah"}, {"chaptersArr": [], "limit": 0, "name": "Habakkuk", "id": "eng-ESV:Hab"}, {"chaptersArr": [], "limit": 0, "name": "Zephaniah", "id": "eng-ESV:Zeph"}, {"chaptersArr": [], "limit": 0, "name": "Haggai", "id": "eng-ESV:Hag"}, {"chaptersArr": [], "limit": 0, "name": "Zechariah", "id": "eng-ESV:Zech"}, {"chaptersArr": [], "limit": 0, "name": "Malachi", "id": "eng-ESV:Mal"}, {"chaptersArr": [], "limit": 0, "name": "Matthew", "id": "eng-ESV:Matt"}, {"chaptersArr": [], "limit": 0, "name": "Mark", "id": "eng-ESV:Mark"}, {"chaptersArr": [], "limit": 0, "name": "Luke", "id": "eng-ESV:Luke"}, {"chaptersArr": [], "limit": 0, "name": "John", "id": "eng-ESV:John"}, {"chaptersArr": [], "limit": 0, "name": "Acts", "id": "eng-ESV:Acts"}, {"chaptersArr": [], "limit": 0, "name": "Romans", "id": "eng-ESV:Rom"}, {"chaptersArr": [], "limit": 0, "name": "1 Corinthians", "id": "eng-ESV:1Cor"}, {"chaptersArr": [], "limit": 0, "name": "2 Corinthians", "id": "eng-ESV:2Cor"}, {"chaptersArr": [], "limit": 0, "name": "Galatians", "id": "eng-ESV:Gal"}, {"chaptersArr": [], "limit": 0, "name": "Ephesians", "id": "eng-ESV:Eph"}, {"chaptersArr": [], "limit": 0, "name": "Philippians", "id": "eng-ESV:Phil"}, {"chaptersArr": [], "limit": 0, "name": "Colossians", "id": "eng-ESV:Col"}, {"chaptersArr": [], "limit": 0, "name": "1 Thessalonians", "id": "eng-ESV:1Thess"}, {"chaptersArr": [], "limit": 0, "name": "2 Thessalonians", "id": "eng-ESV:2Thess"}, {"chaptersArr": [], "limit": 0, "name": "1 Timothy", "id": "eng-ESV:1Tim"}, {"chaptersArr": [], "limit": 0, "name": "2 Timothy", "id": "eng-ESV:2Tim"}, {"chaptersArr": [], "limit": 0, "name": "Titus", "id": "eng-ESV:Titus"}, {"chaptersArr": [], "limit": 0, "name": "Philemon", "id": "eng-ESV:Phlm"}, {"chaptersArr": [], "limit": 0, "name": "Hebrews", "id": "eng-ESV:Heb"}, {"chaptersArr": [], "limit": 0, "name": "James", "id": "eng-ESV:Jas"}, {"chaptersArr": [], "limit": 0, "name": "1 Peter", "id": "eng-ESV:1Pet"}, {"chaptersArr": [], "limit": 0, "name": "2 Peter", "id": "eng-ESV:2Pet"}, {"chaptersArr": [], "limit": 0, "name": "1 John", "id": "eng-ESV:1John"}, {"chaptersArr": [], "limit": 0, "name": "2 John", "id": "eng-ESV:2John"}, {"chaptersArr": [], "limit": 0, "name": "3 John", "id": "eng-ESV:3John"}, {"chaptersArr": [], "limit": 0, "name": "Jude", "id": "eng-ESV:Jude"}, {"chaptersArr": [], "limit": 0, "name": "Revelation", "id": "eng-ESV:Rev"}]    // $http.get('data/books.json').success(function(data){
    // 	$scope.books = data;
    // });
    $scope.selectedBook = "";
    $scope.lastSelectedBook = "";
    $scope.index = -1;
  //  var chaptersArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for (var i = 0; i<$scope.books.length; i++){
    //    $scope.books[i].chaptersArr = chaptersArr;
        $scope.books[i].selected = false;
        $scope.books[i].bookVerses = [];
                $scope.books[i].numChapters = 0;

    }
    // var a = _.findIndex(arr, 'name', 'c');
    // console.log(a);
    // console.log($scope.books);

    $scope.showChapter = function(book,chap){
       // $scope.books[$scope.index]
        $scope.chapterVerses = $scope.books[$scope.index].bookVerses[chap];
        $scope.bookTitle = book + " " + (chap + 1);


    }
    
    $scope.setSelectedbook = function(book){

        if ($scope.selectedBook == book){
          return;
        }
        $scope.lastSelectedBook = $scope.selectedBook;
        $scope.selectedBook = book;
        console.log($scope.selectedBook);
        console.log($scope.lastSelectedBook);

        $scope.index = _.findIndex($scope.books, 'name', book);
        $scope.oldIndex = _.findIndex($scope.books, 'name', $scope.lastSelectedBook);
        if ($scope.oldIndex != -1){

          $scope.books[$scope.oldIndex]['selected'] = false;

      }
        $scope.books[$scope.index]['limit'] = 100;
        $scope.books[$scope.index]['selected'] = true;

        if ($scope.books[$scope.index].chaptersArr.length == 0){
            console.log('here');
            $http.get('data/' + $scope.selectedBook).success(function(data){
                $scope.books[$scope.index].bookVerses = data;
                $scope.books[$scope.index].numChapters = data.length;


                    for (var i = 0; i < $scope.books[$scope.index].numChapters; i++){
                       $scope.books[$scope.index].chaptersArr.push(i);
                    }

        

           })
        }

        // var index = _.findIndex($scope.books, 'name', book);
        //  for (var i = 0; i < $scope.numChapters; i++){
        //     $scope.books[index].chaptersArr.push(i);
        //             console.log( $scope.books[index].chaptersArr);

        // }
        // $scope.books[index]['limit'] = 50;
       

       // $scope.chapters="1 2 3 4 5";
      //  console.log('here');

       

    }
	
    
})


bibleControllers.controller('bibleDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

	$scope.bookName = $routeParams.bookName;

	$http.get('data/' + $scope.bookName).success(function(data){

		$scope.bookVerses = data;
	});


}])
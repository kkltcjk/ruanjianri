'use strict';

angular.module('yardStickGui2App')
    .controller('MainCtrl', ['$scope', '$state', '$stateParams', 'mainFactory', '$http',
        function($scope, $state, $stateParams, mainFactory, $http) {

            var hexToDec = function(str) {
                str=str.replace(/\\/g,"%");
                return unescape(str);
            }

            function decode(value)
            {
                return hexToDec(value);
            }

            function get_uuid() {
                function S4() {
                    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
                }
                return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
            }


            $scope.user_id = $.cookie('user_id');
            if($scope.user_id == null){
                $.cookie('user_id', get_uuid());
                $scope.user_id = $.cookie('user_id');
            }

            $http.get('/api/test/' + $scope.user_id).then(function(resp){
                $scope.question = resp.data.question;
                $scope.question.question = decode($scope.question.question);
                $scope.question.answerA = decode($scope.question.answerA);
                $scope.question.answerB = decode($scope.question.answerB);
                $scope.question.answerC = decode($scope.question.answerC);
                $scope.question.answerD = decode($scope.question.answerD);
            }, function(error){
            });

            $scope.gotoTest = function(){
                $state.go('app', {},{reload:true});
            }

            $scope.gotoResult = function(){
                $state.go('result');
            }

            function recordscore(is_right, questionid)
            {
                $http.post('/api/score', JSON.stringify({'user_id': $scope.user_id,'is_right':is_right, 'question_id':questionid})).then(function(resp){
                    if (resp.data.status == 0)
                    {
                       //window.location.reload();
                    }
                    else if (resp.data.status == 1)
                    {
                        if (confirm('This question has answered, try the next?'))
                    {
                        window.location.reload();
                        }
                    }
                    else
                    {
                       //alert('会话已经超时，请刷新页面');
                    }
                }, function(error){
                });

                /*
                $.ajax({
                  url: "/api/score",

                  type: 'POST',

                  data:{'user_id': $scope.user_id,'is_right':is_right, 'question_id':questionid},

                  dataType: 'json',

                  timeout: 10000,

                  error: function(data,e){},

                  success: function(result){
                      console.log(result);
                    
                    if (result.success == 1)
                    {
                       //window.location.reload();
                    }
                    else if (result.success == 2)
                    {
                        if (confirm('This question has answered, try the next?'))
                    {
                        window.location.reload();
                        }
                    }
                    else
                    {
                       //alert('会话已经超时，请刷新页面');
                    }
                  }

                  });
                  */
            }

            var isanswered = 0;
            $scope.chooseit = function chooseit(questionid, rightanswer, chooseid)
            {
                if (isanswered == 0)
                {
                    if (rightanswer == chooseid)
                    {
                        $('#judge'+chooseid).html('&nbsp;&nbsp;<strong><font color=green>√</font></strong>');
                        isanswered++;
                    }
                    else
                    {
                        $('#judge'+chooseid).html('&nbsp;&nbsp;<strong><font color=red>×</font></strong>');
                        isanswered++;
                    }
                    recordscore((rightanswer == chooseid? 1: 0),questionid);
                }
                
            }
        }
    ]);

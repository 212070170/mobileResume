/**
 * Created by 212070170 on 4/30/2015.
 */
/*global define */
define(['angular', 'directives-module','bootstrap-3.2.0'], function(angular, directives) {
    'use strict';

    /* Directives  */

    directives.directive('ngMultiPage', [
        '$timeout',
        function($timeout) {
            return {
                restrict: 'E',
                replace: true,
                require: '?ngModel',
                transclude: true,
                template:'<div ng-transclude class="inner ngMultiPage"></div>',

                moveRight : function(id){
                    var currPos =  $("#"+id+" pages").css("left");
                    currPos = currPos.replace(/[^\d.-]/g, '');
                    currPos = (currPos == "")?0:currPos;
                    var w =  $("#"+id+" pages").css("width");
                    w = w.replace(/[^\d.-]/g, '');

                    var newPos = parseInt(currPos) + parseInt(w);

                    if(newPos <=0)
                        $("#"+id+" pages").css("left",newPos+"px");

                },
                moveLeft : function(id,len){
                    var currPos =  $("#"+id+" pages").css("left");
                    currPos = currPos.replace(/[^\d.-]/g, '');
                    currPos = (currPos == "")?0:currPos;
                    currPos = parseInt(currPos);
                    var w =  $("#"+id+" pages").css("width");
                    w = w.replace(/[^\d.-]/g, '');
                    w = parseInt(w);

                    var newPos = currPos - w;
                    console.log("curr",newPos - ((w*len)* -1));
                      if(w <= (newPos - ((w*len)* -1)))
                        $("#"+id+" pages").css("left",newPos+"px");

                },
                enableSwipe: function(myid,len) {
                    var that = this;
                    var id = myid;
                    var moved = false;

                    var e = document.getElementById(id);
                    e.addEventListener('touchstart', handleTouchStart, false);
                    document.addEventListener('touchmove', handleTouchMove, false);

                    var xDown = null;
                    var yDown = null;

                    function handleTouchStart(evt) {
                        xDown = evt.touches[0].clientX;
                        yDown = evt.touches[0].clientY;
                    };

                    function handleTouchMove(evt) {
                        if (!xDown || !yDown) {
                            return;
                        }

                        var xUp = evt.touches[0].clientX;
                        var yUp = evt.touches[0].clientY;

                        var xDiff = xDown - xUp;
                        var yDiff = yDown - yUp;


                        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
                            if (xDiff > 0) {
                                /* left swipe */
                                that.moveLeft(id,len);
                            } else {
                                /* right swipe */
                                that.moveRight(id);
                            }
                        } else {
                            if (yDiff > 0) {
                                /* up swipe */

                            } else {
                                /* down swipe */

                            }
                        }


                        /* reset values */
                        xDown = null;
                        yDown = null;
                    }

                },


                compile: function (element, attr) {
                    var that = this;
                    var id = attr.id;


                    return function ($scope, $element, $attr) {
                        var len = $("#"+id).find("page").length;
                        var nav = $("#"+id).attr("nav");

                        $("#"+id).find("pages page").each(function(i,e){
                            var index = $(this).attr("index");

                            var pos = (parseInt(index)-1)*100;
                            console.log("POS",nav);
                            $(this).css("left",pos+"%");

                            // build navigation on header
                            if(nav != "false"){
                                $(this).find("header").each(function(){
                                    var chevLeft = "";
                                    var chevRight = "";

                                    if(i != 0)
                                        chevLeft = "<button class='btn pull-left previousPage'><i class='fa fa-chevron-left'></i></button>";

                                    if( i != len-1)
                                        chevRight = "<button class='btn pull-right nextPage'><i class='fa fa-chevron-right'></i></button>";

                                    var cont = $(this).html();
                                    $(this).html(chevLeft+cont+chevRight);

                                })

                                $(this).find(".nextPage").click(function(){
                                   that.moveLeft(id,len);
                                })

                                $(this).find(".previousPage").click(function(){
                                    that.moveRight(id);
                                });

                            }

                        });

                        that.enableSwipe(id,len);

                        $scope.$on('$destroy', function () {

                        });
                    };
                }
            }

        }]);

    return directives;
});
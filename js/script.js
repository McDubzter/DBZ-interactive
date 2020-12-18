// var tag = document.createElement('script');
// tag.id = 'iframe-demo';
// tag.src = 'https://www.youtube.com/iframe_api';
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
// var player = document.getElementById('player');
//
//   player.src = "http://www.youtube.com/" + player.id;
//
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//       events: {
//         'onReady': onPlayerReady,
//         'onStateChange': onPlayerStateChange
//       }
//   });
// }
// function onPlayerReady(event) {
//   document.getElementById('player').style.borderColor = '#FF6D00';
// }
// function changeBorderColor(playerStatus) {
//   var color;
//   if (playerStatus == -1) {
//     color = "#37474F"; // unstarted = gray
//   } else if (playerStatus == 0) {
//     color = "#FFFF00"; // ended = yellow
//   } else if (playerStatus == 1) {
//     color = "#33691E"; // playing = green
//   } else if (playerStatus == 2) {
//     color = "#DD2C00"; // paused = red
//   } else if (playerStatus == 3) {
//     color = "#AA00FF"; // buffering = purple
//   } else if (playerStatus == 5) {
//     color = "#FF6DOO"; // video cued = orange
//   }
//   if (color) {
//     document.getElementById('player').style.borderColor = color;
//   }
// }
// function onPlayerStateChange(event) {
//   changeBorderColor(event.data);
// }
// var done = false;
//
//     function onPlayerStateChange(event) {
//       if (event.data == YT.PlayerState.PLAYING && !done ) {
//         done = true;
//
//
//       }
//
//     }
//     function onPlayerStateChange(event) {
//                 if(event.data === 0) {
//                   getConfirmation();
//                   // player.seekTo(120, true);
//
//
//
//
// }
//   }
//
//
// /// if the user stops the video manually within the time frame, then alert saying "you should watch the whole video"
//
//               function getConfirmation() {
//               var retVal = confirm("Prediction time! Do you think that Goku made the right move by choosing Gohan as Cell's next opponent? TIP: click OK for yes and Cancel for no!");
//               if( retVal == true ) {
//                 clicks += 1;
//                 document.getElementById("clicks").innerHTML = clicks
//                 alert ('Your prediction was correct! Lets keep watching!')
//                  // document.write ("User wants to continue!");
//                  window.location.href = "secondVideo.html";
//                  return true;
//
//
//               }
//               else {
//                  // document.write ("User does not want to continue!");
//                  alert ('Your prediction was wrong!')
//                  return false;
//
//               }
//            }
//
//            var player = document.getElementById('player');
//
//              player.src = "http://www.youtube.com/" + player.id;
//
//            function onYouTubeIframeAPIReady() {
//              player = new YT.Player('player', {
//                  events: {
//                    'onReady': onPlayerReady,
//                    'onStateChange': onPlayerStateChange
//                  }
//              });
//            }
//            function onPlayerReady(event) {
//              document.getElementById('player').style.borderColor = '#FF6D00';
//            }
//            function changeBorderColor(playerStatus) {
//              var color;
//              if (playerStatus == -1) {
//                color = "#37474F"; // unstarted = gray
//              } else if (playerStatus == 0) {
//                color = "#FFFF00"; // ended = yellow
//              } else if (playerStatus == 1) {
//                color = "#33691E"; // playing = green
//              } else if (playerStatus == 2) {
//                color = "#DD2C00"; // paused = red
//              } else if (playerStatus == 3) {
//                color = "#AA00FF"; // buffering = purple
//              } else if (playerStatus == 5) {
//                color = "#FF6DOO"; // video cued = orange
//              }
//              if (color) {
//                document.getElementById('player').style.borderColor = color;
//              }
//            }
//            function onPlayerStateChange(event) {
//              changeBorderColor(event.data);
//            }
//            var done = false;
//
//                function onPlayerStateChange(event) {
//                  if (event.data == YT.PlayerState.PLAYING && !done ) {
//                    done = true;
//
//
//                  }
//
//                }
//                function onPlayerStateChange(event) {
//                            if(event.data === 0) {
//                              getConfirmation();
//                              // player.seekTo(120, true);
//
//
//
//
//            }
//              }
//
//
//            /// if the user stops the video manually within the time frame, then alert saying "you should watch the whole video"
//
//                          function getConfirmation() {
//                          var retVal = confirm("12124124 time! Do you think that Goku made the right move by choosing Gohan as Cell's next opponent? TIP: click OK for yes and Cancel for no!");
//                          if( retVal == true ) {
//                            clicks += 1;
//                            document.getElementById("clicks").innerHTML = clicks
//                            alert ('Your prediction was correct! Lets keep watching!')
//                             // document.write ("User wants to continue!");
//                             window.location.href = "secondVideo.html";
//                             return true;
//
//
//                          }
//                          else {
//                             // document.write ("User does not want to continue!");
//                             alert ('Your prediction was wrong!')
//                             return false;
//
//                          }
//                       }

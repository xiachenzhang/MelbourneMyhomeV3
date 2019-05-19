$(document).ready(function(){
        //  JavaScript string containing JSON syntax and converted it to Javascript variable
        var quote = ' {"kalam": [ '+
                    ' "Primates.", ' +
                    ' "Carnivores.", ' +
                    ' "dhole.", ' +
                    ' "Pandas.", ' +
                    ' "Civet.", ' +
                    ' "Otter.",' +
                    ' "Baiji.", ' +
                    ' "Finless porpoise."], ' +
                   

                    ' "younus": [ ' +
                    ' "Sweet and Sour Pork.",  ' +
                    ' "Kung Pao Chicken.", ' +
                    ' "Ma Po Tofu.", ' +
                    ' "Wontons.", ' +
                    ' "Dumplings.", ' +
                    ' "Chow Mein.", ' +
                    ' "Peking Roasted Duck.", ' +
                    ' "Spring Rolls."], ' +
                

                    ' "linus": [ ' +
                    ' "Great Wall of China.", ' +
                    ' "Forbidden City.", ' +
                    ' "Temple of Heaven.", ' +
                    ' "Summer Palace.", ' +
                    ' "Yanshan Mountains.", ' +
                    ' "Terracotta Warriors.", ' +
                    ' "Jade Buddha Temple.", ' +
                    ' "Cien Temple & Great Wild Goose Pagoda", ' +
                    ' "Intelligence is the ability to avoid doing work, yet getting the work done.", ' +
                    ' "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.", ' +
                    ' "Given enough eyeballs, all bugs are shallow.", ' +
                    ' "Microsoft isn\'t evil, they just make really crappy operating systems." ' +
                    ' ]} ';
        var obj = JSON.parse(quote);

        // hiding blockquote and #choose
        $("blockquote").hide();
        $("#choose a").hide();

        var a = 0;
        var clicked = "";
        var count = 0;
        var random = [];

        // when clicking in a picture
        $("#box div a").click(function(event){
          event.preventDefault();
          clicked = $(this).attr('href');
          count = 0;

          //if user clicked on showed picture again it will do nothing
          if (a!=0)
            return false;

          // showing clicked picture and quote
          $("#box div img, #box div h3").fadeOut(507, function(){
            if(clicked == "younus"){
              $("body").css("background-color", "#31708F");
              $("body").css("color", "black");
              $("#box div:odd img").attr('src', '../../content/thanksgiving-347306_640.jpg');
              $("#box div:odd h3").text("Food");
              $("#box div:odd img, #box div:odd h3").fadeIn(507);
              $("#box div:odd a").attr('href', 'younus').css("cursor", "default");
            }
            else if(clicked == "linus"){
              $("body").css("background-color", "#3C763D");
              $("body").css("color", "black");
                $("#box div:odd img").attr('src', '../../content/great-wall-1525124_640.jpg');
              $("#box div:odd h3").text("Building");
              $("#box div:odd img, #box div:odd h3").fadeIn(507);
              $("#box div:odd  a").attr('href', 'linus').css("cursor", "default");
            }
            else{
              $("body").css("background-color", "#A94442");
                $("body").css("color", "black");
                $("#box div:odd img").attr('src', '../../content/panda.jpg');
                $("#box div:odd h3").text("Animal");
              $("#box div:odd img, #box div:odd h3").fadeIn(507);
                $("#box div:odd  a").attr('href', 'kalam').css("cursor", "default");
            }
          });

          // changing #choose
          $("#choose h4").hide();
          $("#choose a").show();

          // showing quotes
          random[1] = Math.floor( Math.random()*(obj[clicked].length) );
          random[0] = random[1];
          $("blockquote").prepend("<p>"+ obj[clicked][random[1]] +"</p>");
          $("blockquote").show(915);
          a = 1;

        });  //end picture click event

          // for clicking new quote
          $("blockquote a.right").click(function(){
                $("blockquote p").remove();
                random[0] = random[1];
                random[1] = Math.floor( Math.random()*(obj[clicked].length) );
                //if it generates same number again 
                random[0] == random[1] ? random[1] = Math.floor( Math.random()*(obj[clicked].length) ) : true;
                $("blockquote").prepend("<p>"+ obj[clicked][random[1]] +"</p>");
          });

          // for clicking previous
          $("blockquote a.left").click(function(){
            $("blockquote p").remove();
            $("blockquote").prepend("<p>"+ obj[clicked][random[0]] +"</p>");
            random[1] = random[0];
          });

          // for clicking Choose Another, reset everything
          $("#choose a").click(function(event){
            event.preventDefault();
          $("#box div:odd img, #box div:odd h3").fadeOut(307, function(){
            $("body").css("background-color", "sandybrown");
            $("body").css("color", "#333333");
            $("#box div:odd img").attr('src', '../../content/panda.jpg');
              $("#box div:odd h3").text("Animal");
              
              $("#box div:odd  a").attr('href', 'kalam').css("cursor", "default");
            $("#box div img, #box div h3").fadeIn(307);
            $("blockquote").hide();
            $("#choose h4").show();
            $("#choose a").hide();
            $("blockquote p").remove();
            a = 0;
            $("#box div:odd  a").css("cursor", "pointer");
            });
          });

     

      });
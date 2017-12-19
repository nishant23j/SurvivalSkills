/*global $ */
             function putValue()
             {
                    var e = document.getElementById("blockSize");
                    if(e.value>30||e.value<1)
                    {
                      $('#myModal1').modal("show");

                    }
                    
                    else{
                    var blockSize = Math.floor(e.value);
                    localStorage.blockSize=blockSize;
                    document.getElementById("blockSizeTextBox").innerHTML = localStorage.blockSize;
                        var dataString = 'name='+blockSize;
                    
                        $.ajax({
                                    type: "POST",
                                    url: "PHP/blockSizedSending.php",
                                    data: dataString,
                                    cache: false,
                                    success: function(html) {
                                    alert(html);
                                    }
                                    });
                        
                       }
                 return false;
              }
             function showModal()
             {
               $('#myModal').modal("show");
             }
             function myModalStatus()
                         {
                           $('#StatusModal').modal("show");
                         }

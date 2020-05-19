    $(document).ready(function(){
        $("#fact").click(function(){
            var n=parseInt($("#num").val()); //getter
            var f=1;
            for(i=1;i<=n;i++){
                f=f*i;
            }
            $("#result").val(f); //setter
        });
    });

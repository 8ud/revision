(function(){

   var engine = {
      onInit : function(){
         $('#idbtcall').click(engine.onClickCall);
      },
      onClickCall : function(){
         console.log("clic");
         // appel url /contact en mode GET
         $.get("/contact" , function(data){
            console.log(data);
         }, "json").done(function(){
            console.log("fini");
         }).fail(function(){
            console.error(err);
         });
      }

   };
      $(document).ready(engine.onInit);

})();
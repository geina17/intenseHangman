var letter =function(lett){
    this.charac =lett;
    this.appear =false;
    this.lttrRnd =function(){
        return!(this.appear)?'_':this.charac;
    };
};

//export constructor
module.exports=letter;
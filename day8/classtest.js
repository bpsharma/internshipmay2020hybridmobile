class General{
    constructor(num){
        this.num=num;
    }
    factorial(){
        var f=1;
        for(var i=1;i<=this.num;i++)
            f=f*i;
        return f;
    }
}

var g=new General(7);
console.log(g.factorial());

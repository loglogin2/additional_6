module.exports = function zeros(expression) {
  // your solution
    var arr = expression.split('*');
    var ans = 1;
    var tmp = 1;
    for(var i = 0 ; i < arr.length ; i ++) {
        if(arr[i].indexOf("!!") >  0 )
        {
            arr[i] = parseInt(arr[i],10);
            var chet = 1;
            if(arr[i] % 2 == 0)
                chet = 1;
            else
                chet = 0;
            for ( var j = chet ; j < arr[i] ; j ++)
            {
                tmp = tmp*(j+1);
                j++;
            }
            arr[i] = tmp ;
            tmp = 1 ;
        }
        else
        {
            arr[i] = parseInt(arr[i],10);
            for(var j = 0 ; j < arr[i] ; j ++)
                tmp = tmp * (j+1) ;
            arr[i] = tmp;
            tmp = 1;
        }
        ans = ans * arr[i];
    }
    ans = ans.toString();
    var zeros = 0 ;
    for ( var i = ans.length - 1  ; i > 0 ; i --)
    {
        if ( ans[i] == '0')
            zeros ++;
        else
            return zeros;
    }

}

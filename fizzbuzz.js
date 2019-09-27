
<html>
<head>
<title>fizbuzz</title>
</head>
<body>
    <script type="text/javascript">
function fizzBuzz(list1, list2) {
    var combinedlist= list1.concat(list2);
           var output='';
           var lengthh = combinedlist.length;
           
           if(lengthh%3 == 0 && lengthh % 5 == 0){
               output += 'Fizzbuzz' 
           }else if(lengthh%3==0){  
            output += 'Fizz' 
           }else if(lengthh%5==0){  
            output += 'Buzz'
           }else{  
            output +='' + lengthh
           }
        return output;
}
module.exports = fizzBuzz;
    
    </script>
</body>
</html>
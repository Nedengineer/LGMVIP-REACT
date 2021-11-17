console.log('MY TEAM API ');
function getData(a)
{
    url="https://reqres.in/api/users?page=1";
    fetch(url).then((response)=>{
        return response.json(); // we can return jason nas well as parts
    }).then((data)=>{
       console.log(data);
       var value=data;       
           var img1=(value['data'][0]['avatar']);
           document.getElementById('t1img').src = img1;
           var img2=(value['data'][1]['avatar']);
           document.getElementById('t2img').src = img2;
           var img3=(value['data'][2]['avatar']);
           document.getElementById('t3img').src = img3;
           var img3=(value['data'][3]['avatar']);
           document.getElementById('t4img').src = img3;
           var img3=(value['data'][4]['avatar']);
           document.getElementById('t5img').src = img3;
           var img3=(value['data'][5]['avatar']);
           document.getElementById('t6img').src = img3;
           ///// name
           var first1=(value['data'][0]['first_name']);
           var last1=(value['data'][0]['last_name']);
           document.getElementById('name11').innerHTML =first1+" "+last1;
           var first1=(value['data'][1]['first_name']);
           var last1=(value['data'][1]['last_name']);
           document.getElementById('name12').innerHTML =first1+" "+last1;
           var first1=(value['data'][2]['first_name']);
           var last1=(value['data'][2]['last_name']);
           document.getElementById('name13').innerHTML =first1+" "+last1;
           var first1=(value['data'][3]['first_name']);
           var last1=(value['data'][3]['last_name']);
           document.getElementById('name14').innerHTML =first1+" "+last1;
           var first1=(value['data'][4]['first_name']);
           var last1=(value['data'][4]['last_name']);
           document.getElementById('name15').innerHTML =first1+" "+last1;
           var first1=(value['data'][5]['first_name']);
           var last1=(value['data'][5]['last_name']);
           document.getElementById('name16').innerHTML =first1+" "+last1;
     /////mail
      var mail1=(value['data'][0]['email']);
           document.getElementById('email1').innerHTML=mail1;
           var mail2=(value['data'][1]['email']);
           document.getElementById('email2').innerHTML=mail2;
           var mail3=(value['data'][2]['email']);
           document.getElementById('email3').innerHTML=mail3;
           var mail3=(value['data'][3]['email']);
           document.getElementById('email4').innerHTML=mail3;
           var mail3=(value['data'][4]['email']);
           document.getElementById('email5').innerHTML=mail3;
           var mail3=(value['data'][5]['email']);
           document.getElementById('email6').innerHTML=mail3;
           
           


        })
}
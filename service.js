
let auth_token;
$(document).ready(function (){
    $.ajax({
        type: 'get',
        url: 'https://www.universal-tutorial.com/api/getaccesstoken',
        success: function(data){
            auth_token=data.auth_token;
            getCountry(data.auth_token);
        },
        error: function(error) {
            console.log('error');
        },
        headers: {
            "Accept": "application/json",
            "api-token": "xOBF8DreV22DquRWL4qFyAsDEgS6aS_LrCmk37GhGX7C98_-d2E5SqL8TmKnKChXNdI",
            "user-email": "raksharakshu158@gmail.com"
        }
    })
    $('#country').change(function(){
        getState();
    })
    $('#state').change(function(){
        getCity();
    })
})
function getCountry(auth_token){
    $.ajax({
        type: 'get',
        url: 'https://www.universal-tutorial.com/api/countries/',
        success: function(data){
            data.forEach(element => {
                $('#country').append('<option value="'+element.country_name+'">'+element.country_name+'</option>');
            });
            //getState(auth_token);
        },
        error: function(error) {
            console.log('error');
        },
        headers: {
            "Authorization": "Bearer "+ auth_token,
            "Accept": "application/json"
        }
    })
}
    function getState(){
        let country_name = $('#country').val();
        $.ajax({
            type: 'get',
            url: 'https://www.universal-tutorial.com/api/states/'+country_name,
            success: function(data){
                $('#state').empty();
                data.forEach(element => {
                    $('#state').append('<option value="'+element.state_name+'">'+element.state_name+'</option>');
                });
                //getState(auth_token);
            },
            error: function(error) {
                console.log('error');
            },
            headers: {
                "Authorization": "Bearer "+ auth_token,
                "Accept": "application/json"
            }
        })  
    }

    
    function getCity(){
        let state_name = $('#state').val();
        $.ajax({
            type: 'get',
            url: 'https://www.universal-tutorial.com/api/cities/'+state_name,
            success: function(data){
                $('#city').empty();
                data.forEach(element => {
                    $('#city').append('<option value="'+element.city_name+'">'+element.city_name+'</option>');
                });
                //getState(auth_token);
            },
            error: function(error) {
                console.log('error');
            },
            headers: {
                "Authorization": "Bearer "+ auth_token,
                "Accept": "application/json"
            }
        })  
    }
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJyYWtzaGFyYWtzaHUxNThAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoieE9CRjhEcmVWMjJEcXVSV0w0cUZ5QXNERWdTNmFTX0xyQ21rMzdHaEdYN0M5OF8tZDJFNVNxTDhUbUtuS0NoWE5kSSJ9LCJleHAiOjE2MzUyNzY2MDF9.zR7R5t2_o2AomEG-Ap7xrayhn5Z1JwRWE1mmjdj1DEg

//xOBF8DreV22DquRWL4qFyAsDEgS6aS_LrCmk37GhGX7C98_-d2E5SqL8TmKnKChXNdI

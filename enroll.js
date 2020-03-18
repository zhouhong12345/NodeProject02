$(function(){
    var $btn=$('#check'),
        $user=$('#username'),
        $phone=$('#number'),
        $pass=$('#password'),
        $c=$('#cord'),
        $e=$('#enroll'),
        num=6,
        timer;

    $e.click(function(){
        if(!validate('#username') || !validate('#number') || !validate('#password') || !validate('#cord')){
            return;
        }
    })

    //需改进，控件太多怎么办
    $user.focusout(function(){
        if(!validate('#username')){
            $user.select();
        }
        else if(!/^[\u4e00-\u9fa5A-Za-z0-9-\_]+$/.test($user.val())){
            $('#username-validation-message').html('用户名仅支持中文英文、数字和下划线');
            $user.select();
        }
    })
    $phone.focusout(function(){
        if(!validate('#number')){
            $phone.select();
        }
        else if(!/^\d{11}$/.test($phone.val())){
            $('#number-validation-message').html('手机格式不对');//手机号码11位
            $phone.select();
        }
    })
    $pass.focusout(function(){
        if(!validate('#password')){
            $pass.select();
        }
        else if(!/^[A-Za-z0-9]+$/.test($pass.val())){
            $('#password-validation-message').html('密码仅支持由数字和字母');
            $pass.select();
        }
    })
    $c.focusout(function(){
        if(!validate('#cord')){
            $c.select();
        }
    })

    function validate(n){
        console.log(n);
        var $data=$(n),
            $msg=$(n+'-validation-message');
        
        if($data.val() === ''){
            if(n === '#username'){
                $msg.html('用户名不能为空');
                return false;
            }
            if(n === '#number'){
                $msg.html('手机号不能为空');
                return false;
            }
            if(n === '#password'){
                $msg.html('密码不能为空');
                return false;
            }
            if(n === '#cord'){
                $msg.html('验证码不能为空');
                return false;
            } 
        }
        $msg.html('');
        return true
    }

    //验证码
    $btn.click(function(){
        timer = setInterval(function(){
            num--;
            if(num===0){
                clearInterval(timer);
                $btn.val('获取验证码');
                $btn.removeAttr('disabled');
                num=5;
            }else{
                $btn.val(num+'s后重新发送');
                $btn.attr('disabled',true);
            }
        },1000);
    });
});
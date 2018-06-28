
const registerUrl = '/register';
const loginUrl = '/login';
export function register(userData){
    console.log(userData)
    if(fetch){
        let request = new Request(registerUrl);
        fetch(request,{
            method: 'post',
            credentials: "same-origin",
            body: userData
        }).then(response=>{
            if(response.status!==200){
                throw new Error('服务器内部错误')
            }
            return response.json()
        }).then(data=>{
            if(data.result){
                alert('注册成功')
            }else if(!data.result&&data.errorCode == 1){
                alert('该用户已被注册')
            }
        }).catch(err=>{
            if(err){
                alert(err.message)
            }
        })
    }
}
export function login(userData,updateUser,updateMeUrl){
    if(fetch){
        let request = new Request(loginUrl);
        fetch(request,{
            method: 'post',
            credentials: "same-origin",
            body: userData
        }).then(reponse=>{
            if(reponse.status == 500){
                throw new Error('服务器内部错误')
            }
            return reponse.json()
        }).then(data=>{
            if(data.result){
                updateUser({name: data.username})
                updateMeUrl()
                alert('登陆成功')
            }else{
                alert('登陆信息错误')
            }
        }).catch(err=>{
            if(err){
                alert(err.message)
            }
        })
    }
}
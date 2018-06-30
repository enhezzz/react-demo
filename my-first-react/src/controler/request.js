
const REGISTER_URL = '/register';
const LOGIN_URL = '/login';
const LOGOUT_URL = '/logout';
const SESSION_INFO = '/sessionInfo';
const ARTICLE = '/article'
const UPDATE_AVATAR = '/avatar'
export function register(userData){
    console.log(userData)
    if(fetch){
        let request = new Request(REGISTER_URL);
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
        let request = new Request(LOGIN_URL);
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
                updateUser({
                    name: data.username,
                    avatarPath: data.avatarPath
                })
                updateMeUrl()
                alert('登陆成功');
                this.props.history.push('/me')
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
export function logout(cb){
    if(fetch){
        let request = new Request(LOGOUT_URL);
        fetch(request,{
            method: 'put',
            credentials: "same-origin"
        }).then(response=>{
            return response.json()
        }).then(data=>{
            if(data.res){
                alert('退出成功');
                cb();
                console.log(this.props)
                this.props.history.replace('/login')
            }
        }).catch(err=>{
            console.log(err)
            if(err){
                // alert('错误')
            }
        })
    }
}
export async function session(){
    if(fetch){
        let request = new Request(SESSION_INFO);
        let initState = await fetch(request,{
            method: 'get',
            credentials: "same-origin"
        }).then(response=>{
            return response.json()
        }).then(initState=>{
            console.log(initState)
           return initState;
        }).catch(err=>{

        })
        return initState
    }
}
export function publish(data,cb){
    if(fetch){
        let request = new Request(ARTICLE);
        fetch(request,{
            method: 'post',
            credentials: "same-origin",
            body: data
        }).then(response=>{
            if(response.status == 500){
                alert('你还未登陆,请登陆~');
                this.props.history.push('/login')
            }
            return response.json()
        }).then(data=>{
            if(data.result){
                alert('发表成功');
                delete data.result
                console.log(data)
                cb(data)
            }
        }).catch(err=>{
            if(err) {
                throw err
            }
        })
    }
}
export function update_avatar(avatar,updateAvatar){
    if(fetch){
        let request = new Request(UPDATE_AVATAR);
        fetch(request,{
            method: 'put',
            credentials: "same-origin",
            body: avatar
        }).then(response=>{
            return response.json()
        }).then(data=>{
            updateAvatar(data.avatarPath);
        }).catch(err=>{

        })
    }
}
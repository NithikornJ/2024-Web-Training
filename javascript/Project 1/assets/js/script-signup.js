async function createAccount(){
    let NoImg = "data:image/png;base64,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";

    let reqData = {
        username : document.getElementById("username").value.trim().toLowerCase(),
        password :document.getElementById("password").value.trim(),
        first_name : document.getElementById("fname").value.trim(),
        last_name : document.getElementById("lname").value.trim(),
        profile : NoImg
    }
    let reqDataAuth ={
    username : document.getElementById("username").value.trim().toLowerCase(),
    password : document.getElementById("password").value.trim()
    }
    if (reqData.username == "" || reqData.password == "" || reqData.first_name == "" || reqData.last_name ==""){
        document.getElementById('errMsg').innerHTML = '*กรุณากรอกข้อมูลให้ครบถ้วน'
    }else{
        showLoading()
        document.getElementById('errMsg').innerHTML = ''
        try{
            await axios.post(BaseApiUrl + `/account`,reqData)
            let resData = await axios.post(BaseApiUrl + `/account/signin`,reqDataAuth)
            
            localStorage.setItem('srcAccount',JSON.stringify(resData.data.data))
            window.open('/','_self')
        }catch(error){   
            hideLoading()         
            document.getElementById('errMsg').innerHTML = 'ชื่อผู้ใช้นี้ถูกใช้แล้ว'
        }
    }
}

//LocalStorage存储数据
export function setLocalStorage(key, value){
    let _value;
    if (
        Object.prototype.toString.call(value) === '[object Object]' ||
        Object.prototype.toString.call(value) === '[object Array]'
    ) {
        _value = JSON.stringify(value);
    }else{
        _value = value;
    }
    localStorage.setItem(key, _value);
}

//LocalStorage获取数据
export function getLocalStorage(params){
    let _value = localStorage.getItem(params);
    try {
        _value = JSON.parse(_value);
    }catch (err){
        console.log(err);
    }
    return _value || '';
}




//SessionStorage存储数据
export function setSessionStorage(key, value){
    let _value;
    if (
        Object.prototype.toString.call(value) === '[object Object]' ||
        Object.prototype.toString.call(value) === '[object Array]'
    ) {
        _value = JSON.stringify(value);
    }else{
        _value = value;
    }
    sessionStorage.setItem(key, _value);
}

//SessionStorage获取数据
export function getSessionStorage(params){
    let _value = sessionStorage.getItem(params);
    try {
        _value = JSON.parse(_value);
    }catch (err){
        console.log(err);
    }
    return _value || '';
}

//LocalStorage存储数据
export function setLocalStorage(key, value){
    let _value;
    if (
        Object.prototype.toString.call(value) === '[object Object]' ||
        Object.prototype.toString.call(value) === '[object Array]'
    ) {
        _value = JSON.stringify(value);
    }
    localStorage.setItem(key, _value);
}

//LocalStorage获取数据
export function getLocalStorage(params){
    let _value = localStorage.getItem(params);
    return JSON.parse(_value);
}

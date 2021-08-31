/**
 * 公用方法模块
 */
export default {
    /**
     * @param {string} url 
     */
    async loadScript(url){
        return new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
            script.onload = function(){
                resolve();
            }
            script.onerror = function() {
                reject(`加载${url}失败`);
            }
        })
    },
    /**
     * 获取查询字符参数
     */
    getParams(){
        let searchStr = window.location.search;
        if(!searchStr){
            return {};
        }
        let params = searchStr.substring(1),
            obj = {};
        params.split("&").forEach(val=>{
            let arr = val.split("=");
            obj[arr[0]] = arr[1];
        })
        return obj;
    },
}
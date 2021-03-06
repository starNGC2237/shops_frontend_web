/**
 * 该方法是用来设置cookie的
 * @param {String} cname cookie的名字
 * @param {String} cvalue cookie的值
 * @param {number||String} exdays 持续时间(天)
 */
function setCookie(cname, cvalue, exdays) {
    if (exdays !== '') {
        var d = new Date()
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
        var expires = 'expires=' + d.toUTCString()
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
    } else {
        document.cookie = cname + '=' + cvalue + ';path=/'
    }
}
/**
 * 该方法返回指定cookie的值
 * @param {String} cname cookie的名字
 */
function getCookie(cname) {
    const name = cname + '='
    const ca = document.cookie.split(';')
    for (const element of ca) {
        let c = element
        while (c.charAt(0) === ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}

export default {
    getCookie,
    setCookie
}

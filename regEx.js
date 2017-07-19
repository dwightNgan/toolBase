let cellphone=/^1[3578]\d{9}$/,
    email=/^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/,
    bankcard=/^(\d{16}|\d{19})$/,
    idCard=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    chineseCharacter=/[\u4e00-\u9fa5]+/g;
console.log(('111我们sss').search(chineseCharacter));
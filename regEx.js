let cellphone=/^1[3578]\d{9}$/,
    email=/^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/,
    bankcard=/^(\d{16}|\d{19})$/;
console.log(bankcard.test('123456789012345678900'));
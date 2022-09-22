
this.pay = function () {

    let data = {
        firstName: document.getElementById('Name').value,
        lastName: document.getElementById('SurName').value,
        phone: document.getElementById('PhoneNum').value,
    }

    let recurrent = document.getElementById('recurrent')
    if (recurrent.checked) {
        data.CloudPayments = {
            recurrent: {
                interval: 'Month',
                period: 1
            }
        }
    }

    let widget = new cp.CloudPayments();
       widget.pay('auth', // или 'charge'
           { //options
               publicId: 'pk_7f9fe7a27555c1f2ec5ceada550d4', //id из личного кабинета
               description: document.getElementById('goal').value,
               amount: parseFloat(document.getElementById('PaySum').value),
               currency: 'RUB', //валюта
               accountId: document.getElementById('email').value,
               invoiceId: '1234567', //номер заказа  (необязательно)
               email: document.getElementById('email').value, //email плательщика (необязательно)
               skin: "mini", //дизайн виджета (необязательно)
               autoClose: 3, //время в секундах до авто-закрытия виджета (необязательный)
               data: data
           },

          
           {
               onSuccess: function (options) { // success
                   //действие при успешной оплате
               },
               onFail: function (reason, options) { // fail
                   //действие при неуспешной оплате
               },
               onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
                   //например вызов вашей аналитики Facebook Pixel
               }
           }
       )
   };
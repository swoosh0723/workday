// 위시리스트
const wishListPage = document.querySelector('#sod_ws');

// 주문페이지
const orderPage = document.querySelector('#sod_frm');


// 위시리스트
if (wishListPage) {
  // 체크
  const wishCheck = document.querySelectorAll('.wish_chk input');
  // 주문하기
  const orderButton = document.querySelector('#sod_ws_act button');

  wishCheck.forEach((item) => {
    if (item.checked == false) {
      item.click();
    }
  });

  orderButton.click();
}

// 주문페이지
if (orderPage) {
  // 주문자와 동일
  const sameAddress = document.querySelector('#ad_sel_addr_same');
  // 무통장 입금
  const payment = document.querySelector('#od_settle_bank');
  // 무통장 입금 은행
  const bank = document.querySelector('#od_bank_account');
  // 주문하기
  const orderButton = document.querySelector('#display_pay_button input');

  sameAddress.click();

  payment.click();

  bank.selectedIndex = "1";

  orderButton.click();
}
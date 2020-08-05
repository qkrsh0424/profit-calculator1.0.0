function submitClick() {
    // console.log(isNaN(document.getElementById("purchaseCost").value));
    if (
        isNaN(document.getElementById("purchaseCost").value) ||
        isNaN(document.getElementById("purchaseTransCharge").value) ||
        isNaN(document.getElementById("sellPrice").value) ||
        isNaN(document.getElementById("realSellTransUnitCharge").value) ||
        isNaN(document.getElementById("sellTransUnitCharge").value) ||
        isNaN(document.getElementById("marketCommitionPercentage").value)
    ) {
        alert("숫자만 입력 하세요")
    } else {
        $(document).ready(function () {
            $.ajax({
                type: "GET", //전송방식을 지정한다 (POST,GET)
                url: "/api/margin/domesticCalc",//호출 URL을 설정한다. GET방식일경우 뒤에 파라티터를 붙여서 사용해도된다.
                dataType: "text",//호출한 페이지의 형식이다. xml,json,html,text등의 여러 방식을 사용할 수 있다.
                data: {
                    // purchaseCost:document.getElementById("purchaseCost").value,
                    // purchaseTransCharge:document.getElementById("purchaseTransCharge").value,
                    // sellPrice:document.getElementById("sellPrice").value,
                    // realSellTransUnitCharge:document.getElementById("realSellTransUnitCharge").value,
                    // sellTransUnitCharge:document.getElementById("sellTransUnitCharge").value,
                    // marketCommitionPercentage:document.getElementById("marketCommitionPercentage").value
                    purchaseCost: $("#purchaseCost").val(),
                    purchaseTransCharge: $("#purchaseTransCharge").val(),
                    sellPrice: $("#sellPrice").val(),
                    realSellTransUnitCharge: $("#realSellTransUnitCharge").val(),
                    sellTransUnitCharge: $("#sellTransUnitCharge").val(),
                    marketCommitionPercentage: $("#marketCommitionPercentage").val()
                },
                error: function () {
                    alert("server connect failed");
                },
                success: function (Parse_data) {
                    // $("#Parse_Area").html(Parse_data); //div에 받아온 값을 넣는다.
                    // alert("통신 데이터 값 : " + Parse_data);
                    // console.log(JSON.parse(Parse_data).margin);
                    $("#marginVal").html(JSON.parse(Parse_data).margin);
                    $("#marginRateVal").html(JSON.parse(Parse_data).marginRate);
                    $("#VAT_10").html(JSON.parse(Parse_data).VAT_10);
                    $("#marginAfterVAT_10").html(JSON.parse(Parse_data).margin - JSON.parse(Parse_data).VAT_10);
                }

            });
        });
        // document.getElementById("submitBtn").submit();
    }
}

function enterkey() {
    if (window.event.keyCode == 13) {

        // 엔터키가 눌렸을 때 실행할 내용
        submitClick();
    }
}
function tinhThue(){
                
    var pc = document.getElementById("pc").checked;
    var vip = document.getElementById("vip").checked;
    var svip = document.getElementById("sVip").checked;
    if(pc==false && vip==false && svip==false ){
        var gia = document.getElementById("gia").value;
            gia = parseInt(gia);
        var tinhHoahong= (gia*40)/100;
        var hoaHong = document.getElementById("hoaHong");
            hoaHong.value=tinhHoahong;
            hoaHong = parseInt(hoaHong);
        var tinhThuNhap = gia - tinhHoahong;
        var thuNhap = document.getElementById("thuNhap");
            thuNhap.value = tinhThuNhap;

    }
    if(pc==true && vip==false && svip==false ){
        var gia = document.getElementById("gia").value;
            gia = parseInt(gia);
        var tinhHoahong= (gia*30)/100;
        var hoaHong = document.getElementById("hoaHong");
            hoaHong.value=tinhHoahong;
            hoaHong = parseInt(hoaHong);
        var tinhThuNhap = gia - tinhHoahong;
        var thuNhap = document.getElementById("thuNhap");
            thuNhap.value = tinhThuNhap;

    }
    if(pc==false && vip==true && svip==false ){
        var gia = document.getElementById("gia").value;
            gia = parseInt(gia);
        var tinhHoahong= (gia*30)/100;
        var hoaHong = document.getElementById("hoaHong");
            hoaHong.value=tinhHoahong;
            hoaHong = parseInt(hoaHong);
        var tinhThuNhap = gia - tinhHoahong;
        var thuNhap = document.getElementById("thuNhap");
            thuNhap.value = tinhThuNhap;

    }
    if(pc==false && vip==false && svip==true ){
        var gia = document.getElementById("gia").value;
            gia = parseInt(gia);
        var tinhHoahong= (gia*20)/100;
        var hoaHong = document.getElementById("hoaHong");
            hoaHong.value=tinhHoahong;
            hoaHong = parseInt(hoaHong);
        var tinhThuNhap = gia - tinhHoahong;
        var thuNhap = document.getElementById("thuNhap");
            thuNhap.value = tinhThuNhap;

    }
    if(pc==true && vip==true && svip==false ){
        var gia = document.getElementById("gia").value;
            gia = parseInt(gia);
        var tinhHoahong= (gia*20)/100;
        var hoaHong = document.getElementById("hoaHong");
            hoaHong.value=tinhHoahong;
            hoaHong = parseInt(hoaHong);
        var tinhThuNhap = gia - tinhHoahong;
        var thuNhap = document.getElementById("thuNhap");
            thuNhap.value = tinhThuNhap;

    }
    if(pc==true && vip==false && svip==true ){
        var gia = document.getElementById("gia").value;
            gia = parseInt(gia);
        var tinhHoahong= (gia*10)/100;
        var hoaHong = document.getElementById("hoaHong");
            hoaHong.value=tinhHoahong;
            hoaHong = parseInt(hoaHong);
        var tinhThuNhap = gia - tinhHoahong;
        var thuNhap = document.getElementById("thuNhap");
            thuNhap.value = tinhThuNhap;

    }
   

}

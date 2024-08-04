let itembtns = document.getElementsByClassName('btn-item');
let resetBtn = document.getElementById('reset-btn');
let icons = document.getElementsByClassName('icon');

for (let i = 0; i < itembtns.length; i++) {
    itembtns[i].counter = 0; 

    itembtns[i].addEventListener('click', function() {
        this.counter++;
        this.innerHTML = this.counter;
    });

    icons[i].addEventListener('click', function() {
        itembtns[i].counter = 0;
        itembtns[i].innerHTML = 0;
    });
}

resetBtn.addEventListener('click', function() {
    Swal.fire({
        icon: "warning",
        title: "هل أنت متأكد انك تريد تصفير العدادات؟",
        showCancelButton: true,
        confirmButtonText: "نعم",
        cancelButtonText: "إلغاء"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("تم تصفير العدادات بنجاح!", "", "success");
            for (let i = 0; i < itembtns.length; i++) {
                itembtns[i].counter = 0;
                itembtns[i].innerHTML = 0;
            }
        }
    });
});

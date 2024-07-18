let itembtns = document.getElementsByClassName('btn-item');
let resetBtn = document.getElementById('reset-btn');
let icons = document.getElementsByClassName('icon');

for (let i = 0; i < itembtns.length; i++) {
    let counter = 0;
    itembtns[i].addEventListener('click', function() {
        counter++;
        itembtns[i].innerHTML = counter;
    });

    icons[i].addEventListener('click', function() {
        counter = 0;
        itembtns[i].innerHTML = counter;
    });
}

resetBtn.addEventListener('click', function() {
   Swal.fire({
    icon:"warning",
  title: "هل أنت متأكد انك تريد تصفير العدادات ؟",
  showDenyButton: false,
  showCancelButton: true,
  confirmButtonText: "Yes",
  denyButtonText: `Don't save`
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire("! تم تصفير العدادات بنجاح ", "", "success");
    for (let i = 0; i < itembtns.length; i++) {
        itembtns[i].innerHTML = 0;
    }
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
});



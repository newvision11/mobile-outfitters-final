var a = document.getElementsByTagName("a");
for(i=0;i<a.length;i++) {
    if(a[i].getAttribute("aria-label")){
    console.log(a[i].getAttribute("aria-label"));
}
}

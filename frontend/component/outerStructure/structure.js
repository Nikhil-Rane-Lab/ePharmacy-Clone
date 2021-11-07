function structureTop() {
	return `<div class="display-abs1">
    <div class="dis-flex top-nav">
        <div class="left-top">
            <img src="../icons/structure/Time.svg" alt="">
        </div>
        <div class="right-top">
            <img src="../icons/structure/Cellular Connection.svg" alt="">
            <img src="../icons/structure/Wifi.svg" alt="">
            <img src="../icons/structure/Battery.svg" alt="">
        </div>
    </div>
</div>`;
}

function structureBottom() {
	return `<div class="display-abs">
    <div class="bottom-navbar dis-flex">
        <div class="nav-icon">
            <img src="../icons/structure/home.svg" alt="">
            <div>Home</div>
        </div>
        <div class="nav-icon">
            <img src="../icons/structure/myOrder.svg" alt="">
            <div>My Order</div>
        </div>
        <div class="nav-icon">
            <img src="../icons/structure/digonastic.svg" alt="">
            <div>Diagnostic</div>
        </div>
        <div class="nav-icon">
            <img src="../icons/structure/profile.svg" alt="">
            <div>Profile</div>
        </div>          

    </div>
</div>`;
}
export { structureTop, structureBottom };

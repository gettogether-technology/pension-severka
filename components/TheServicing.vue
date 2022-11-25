<template>
  <div class="servicing-section">
    <div class="container">
        <div class="grid grid-cols-4 gap-2">
        <div class="box flex items-center">
            <div class="icon mr-4">
                <img src="@/assets/img/wood-house.png" alt="">
            </div>
            <div class="content">
                Kapacita chaty je <br><strong>22</strong> osob
            </div>
        </div>
        <div class="box flex items-center">
            <div class="icon mr-4">
                <img src="@/assets/icons/bed.png" alt="">
            </div>
            <div class="content">
                V Objektu se <br>nachádzi
                <strong>7</strong> ložnic
            </div>
        </div>
        <div class="box flex items-center">
            <div class="icon mr-4">
                <img src="@/assets/icons/kitchen.png" alt="">
            </div>
            <div class="content">
                V chate sa nachádzi<br>
                <strong>2</strong> kuchyňe, jídelna
            </div>
        </div>
        <div class="box flex items-center">
            <div class="icon mr-4">
                <img src="@/assets/icons/jacuzzi.png" alt="">
            </div>
            <div class="content">
                venkovní nerezový
                sud <br>pro <strong>10</strong> hostí
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.servicing-section {
    padding-top: 32px;
    padding-bottom: 64px;
    background: #111111;

    .box {
        // padding: 16px;
        .icon {
            position: relative;
            width: 52px;
            height: 52px;
            display: block;
        }
        .content {
            color: #ffffff;
            font-size: 18px;
        }
    }
}

</style>
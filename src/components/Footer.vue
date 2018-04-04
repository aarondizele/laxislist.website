<template>
    <div class="footer">
        <div class="container text-white">
            <div class="row font-weight-light">
                <div class="col-12 py-2 d-flex flex-row align-items-center justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                      <span>&copy; {{new Date().getFullYear()}}.</span>
                      <h6 class="pl-2 brand"><strong>LaxisList.</strong></h6>
                    </div>
                    <div class="d-flex flex-row align-items-center">
                      <span class="pointer"><i class="fa fa-twitter mr-3" aria-label="true"></i></span>
                      <span class="pointer"><i class="fa fa-facebook-official" aria-label="true"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    position: absolute !important;
    bottom: 0 !important;
    width: 100% !important;
    font-size: 13px !important;
}
i {
    font-size: 18px !important;
}
.container {
    border-top: 1px solid rgba(255, 255, 255, .08) !important;
}
</style>

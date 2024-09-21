<template>
  <Head>
    <title>Your Dream - Strategiku</title>
  </Head>
  <div class="frame">
    <section id="page" class="dark:bg-gray-900 bg-[#f4f4f4] dark:text-white">
      <NavbarDetail :title="titelNav" :link="urlPath" />

      <div class="detail-list">
        <div class="items">
          <div class="col-1">
            <div class="icon">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 512 512"
                id="Layer_1"
                version="1.1"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      class="st0"
                      d="M274.3,139.6v-6.3c13.4-1.3,22.4-8.9,22.4-20.5c0-3.5-0.6-6.5-2-9.1c-3.1-5.9-9.7-9.8-20.8-12.6V70.9 c3.6,0.8,7.1,2.4,10.8,4.6c1.1,0.6,2.1,1,3.2,1c3.3,0,5.9-2.5,5.9-5.8c0-2.5-1.5-4.1-3.2-5.1c-4.8-3-10.1-5.1-16.3-5.8v-2.3 c0-2.5-2-4.5-4.5-4.5c-2.5,0-4.6,2-4.6,4.5v2.2c-4.1,0.3-7.9,1.3-11,2.9c-3.9,1.9-7,4.8-8.9,8.3c-1.4,2.6-2.2,5.6-2.2,8.9 c0,4.8,1.2,8.6,3.6,11.7c3.5,4.6,9.8,7.6,18.9,9.9v20.7c-5.8-1.1-10.6-3.5-15.6-7c-1-0.7-2.2-1.1-3.5-1.1c-3.3,0-5.8,2.5-5.8,5.8 c0,2.2,1.1,3.9,2.8,5c6.4,4.5,13.7,7.4,21.6,8.2v6.5c0,2.5,2.1,4.5,4.6,4.5C272.3,144.1,274.3,142.1,274.3,139.6z M273.9,103.5 c0.2,0.1,0.3,0.1,0.5,0.2c7.7,2.5,9.9,5.3,9.9,9.8c0,5-3.7,8.4-10.4,9.2V103.5z M265.6,88.9c-1.6-0.5-3-1.1-4.2-1.6c0,0,0,0,0,0 c-4.6-2.2-5.9-4.6-5.9-8.2c0-4.6,3.4-8.2,10.1-8.8V88.9z"
                    />
                    <path
                      class="st0"
                      d="M225.2,209.3c-26.8-10.5-57.4-5.8-79.9,12.2c-2,1.6-2.9,4.1-2.6,6.5c4.4,28.5,23.7,52.6,50.5,63.1 c9.5,3.7,19.4,5.5,29.3,5.5c13.6,0,27.1-3.4,39.2-10.1v52.4l-53.9-9.9c-1.9-0.3-3.8,0.1-5.4,1.2L139,376.5v-11.3c0-3.9-3.1-7-7-7 H65.1c-3.9,0-7,3.1-7,7v124c0,3.9,3.1,7,7,7H132c3.9,0,7-3.1,7-7v-19.3l216.8,10.3c0.1,0,0.2,0,0.3,0c2.2,0,4.2-1,5.5-2.7 L448.9,365c3.2-4.2,5-9.2,5-14.5c0-8.5-4.6-16.4-12-20.6c-8.4-4.7-18.6-4-26.2,1.9c-0.9,0.7-1.8,1.5-2.7,2.4l-67.6,71.5l-62.9-17.1 l52.3-8.6c3-0.5,5.3-2.8,5.8-5.8l2.1-13.6c0.6-3.7-1.9-7.3-5.7-8l-61.5-11.3v-55c12.1,6.6,25.6,10.1,39.2,10.1 c9.9,0,19.9-1.8,29.3-5.5c26.8-10.5,46.1-34.6,50.5-63.1c0.4-2.5-0.6-5-2.6-6.5c-22.5-18-53.1-22.6-79.9-12.2 c-14.9,5.8-27.6,16-36.6,28.7v-57c42.4-3.6,75.8-39.2,75.8-82.4c0-12.1-2.5-23.8-7.6-34.6c-1.4-3-2.9-5.8-4.5-8.4 c-0.1-0.2-0.2-0.4-0.3-0.6c-11.1-17.8-28.3-30.7-48.5-36.2c-7.1-1.9-14.4-2.9-21.9-2.9c-28.8,0-55.1,14.6-70.3,39.1 c-0.1,0.2-0.2,0.4-0.3,0.6c-1.2,1.9-2.3,3.9-3.3,5.9C188.9,73,186,85.5,186,98.6c0,2.5,0.1,4.8,0.3,6.8 c2.1,26.1,16.8,49.9,39.2,63.7c11,6.8,23.4,10.8,36.3,11.9v56.9C252.7,225.2,240.1,215.1,225.2,209.3z M198.3,278 c-20.9-8.2-36.3-26.4-41-48.1c18.2-12.8,41.9-15.7,62.8-7.6s36.3,26.4,41,48.1C242.8,283.2,219.2,286.2,198.3,278z M125,482.2H72.1 v-110H125v18.1v72.3V482.2z M327.7,367.1L248.5,380c-3.3,0.5-5.7,3.3-5.9,6.5c-0.2,3.3,2,6.3,5.2,7.1l98.1,26.7 c2.5,0.7,5.1-0.1,6.9-1.9l70.4-74.5c0.3-0.4,0.7-0.7,1.1-1c3.1-2.4,7.3-2.7,10.7-0.8c3.1,1.7,4.9,4.9,4.9,8.4c0,2.1-0.7,4.2-2,5.9 L352.8,466L139,455.9v-62.1l69.3-50.5l119.7,22L327.7,367.1z M317.4,222.3c20.9-8.2,44.5-5.2,62.8,7.6c-4.7,21.8-20.1,40-41,48.1 c-20.9,8.2-44.5,5.2-62.8-7.6C281.1,248.7,296.5,230.4,317.4,222.3z M200.2,104.2c-0.2-1.7-0.2-3.5-0.2-5.6 c0-10.9,2.5-21.3,7.3-30.9c0.9-1.8,1.8-3.5,2.8-5.1c0.1-0.1,0.2-0.2,0.2-0.4c12.7-20.3,34.5-32.4,58.4-32.4 c6.2,0,12.3,0.8,18.2,2.4c16.7,4.6,31,15.2,40.2,30c0.1,0.1,0.1,0.2,0.2,0.3c1.4,2.2,2.7,4.6,3.9,7.2c4.2,9,6.3,18.7,6.3,28.8 c0,37.9-30.8,68.8-68.8,68.8c-12.7,0-25.2-3.5-35.9-10.1C214.2,145.7,202,126,200.2,104.2z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="col-2">
            <label for="">Bunga Pokok Pinjaman</label>
            <span>
              {{ dataKpr.interestPercentage }}% dan total Rp.{{
                formatCurrency(dataKpr.principalInstallments)
              }}</span
            >
          </div>
        </div>

        <div class="items">
          <div class="col-1">
            <div class="icon">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 32 32"
                id="svg5"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <defs id="defs2" />
                  <g id="layer1" transform="translate(36,-148)">
                    <path
                      d="m -28,150 c -2.749574,0 -5,2.25042 -5,5 v 22 a 1.0001,1.0001 0 0 0 1.832031,0.55469 L -30,175.80273 l 1.167969,1.75196 a 1.0001,1.0001 0 0 0 1.664062,0 L -26,175.80273 l 1.167969,1.75196 a 1.0001,1.0001 0 0 0 1.664062,0 L -22,175.80273 l 1.167969,1.75196 a 1.0001,1.0001 0 0 0 1.664062,0 L -18,175.80273 l 1.167969,1.75196 A 1.0001,1.0001 0 0 0 -15,177 v -12 h 7 a 1.0001,1.0001 0 0 0 1,-1 v -9 c 0,-2.74958 -2.2504259,-5 -5,-5 z m 0,2 h 12.007812 C -16.624083,152.83731 -17,153.87659 -17,155 v 1 8 9.69727 l -0.167969,-0.25196 a 1.0001,1.0001 0 0 0 -1.664062,0 L -20,175.19727 l -1.167969,-1.75196 a 1.0001,1.0001 0 0 0 -1.664062,0 L -24,175.19727 l -1.167969,-1.75196 a 1.0001,1.0001 0 0 0 -1.664062,0 L -28,175.19727 l -1.167969,-1.75196 a 1.0001,1.0001 0 0 0 -1.664062,0 L -31,173.69727 V 155 c 0,-1.6687 1.331303,-3 3,-3 z m 16,0 c 1.668697,0 3,1.3313 3,3 v 8 h -6 v -7 -1 c 0,-1.6687 1.331303,-3 3,-3 z"
                      id="rect1587"
                      style="
                        color: #ffffff;
                        fill: #ffffff;
                        fill-rule: evenodd;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4.1;
                        -inkscape-stroke: none;
                      "
                    />
                    <path
                      d="m -28,162 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 4 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
                      id="path6019"
                      style="
                        color: #ffffff;
                        fill: #ffffff;
                        fill-rule: evenodd;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4.1;
                        -inkscape-stroke: none;
                      "
                    />
                    <path
                      d="m -28,165 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
                      id="path6021"
                      style="
                        color: #ffffff;
                        fill: #ffffff;
                        fill-rule: evenodd;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4.1;
                        -inkscape-stroke: none;
                      "
                    />
                    <path
                      d="m -28,168 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
                      id="path6023"
                      style="
                        color: #ffffff;
                        fill: #ffffff;
                        fill-rule: evenodd;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4.1;
                        -inkscape-stroke: none;
                      "
                    />
                    <path
                      d="m -28,155 a 1.0001,1.0001 0 0 0 -1,1 v 4 a 1.0001,1.0001 0 0 0 1,1 h 4 a 1.0001,1.0001 0 0 0 1,-1 v -4 a 1.0001,1.0001 0 0 0 -1,-1 z m 1,2 h 2 v 2 h -2 z"
                      id="rect6025"
                      style="
                        color: #ffffff;
                        fill: #ffffff;
                        fill-rule: evenodd;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4.1;
                        -inkscape-stroke: none;
                      "
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="col-2">
            <label for="">Total Cicilan Perbulan</label>
            <span> Rp.{{ formatCurrency(dataKpr.totalInstallments) }}</span>
          </div>
        </div>

        <div class="items">
          <div class="col-1">
            <div class="icon">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <g clip-path="url(#clip0_443_3628)">
                    <rect
                      x="2"
                      y="6"
                      width="20"
                      height="12"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 10C21.4747 10 20.9546 9.89654 20.4693 9.69552C19.984 9.4945 19.543 9.19986 19.1716 8.82843C18.8001 8.45699 18.5055 8.01604 18.3045 7.53073C18.1035 7.04543 18 6.52529 18 6L22 6L22 10Z"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18 18C18 16.9391 18.4214 15.9217 19.1716 15.1716C19.9217 14.4214 20.9391 14 22 14L22 18L18 18Z"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 14C3.06087 14 4.07828 14.4214 4.82843 15.1716C5.57857 15.9217 6 16.9391 6 18L2 18L2 14Z"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 6C6 7.06087 5.57857 8.07828 4.82843 8.82843C4.07828 9.57857 3.06087 10 2 10L2 6H6Z"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.0741 9.5H11.3333C10.597 9.5 10 10.0596 10 10.75C10 11.4404 10.597 12 11.3333 12H13.1111C13.8475 12 14.4444 12.5596 14.4444 13.25C14.4444 13.9404 13.8475 14.5 13.1111 14.5H10"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 9.51733V8.5"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 15.5173V14.5"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_443_3628">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </div>
          </div>
          <div class="col-2">
            <label for="">Gaji perbulan</label>
            <span>Rp. {{ formatCurrency(dataKpr.monthlyIncome) }}</span>
          </div>
        </div>

        <div class="items">
          <div class="col-1">
            <div class="icon">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M5 9.77746V16.2C5 17.8802 5 18.7203 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7203 19 17.8802 19 16.2V5.00002M21 12L15.5668 5.96399C14.3311 4.59122 13.7133 3.90484 12.9856 3.65144C12.3466 3.42888 11.651 3.42893 11.0119 3.65159C10.2843 3.90509 9.66661 4.59157 8.43114 5.96452L3 12"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="col-2">
            <label for="">Harga Properti</label>
            <span>Rp. {{ formatCurrency(dataKpr.propertyPrice) }}</span>
          </div>
        </div>

        <div class="items">
          <div class="col-1">
            <div class="icon">
              <svg
                width="20px"
                height="20px"
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M18 2.91992V10.9199"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.2008 7.71997L18.0008 10.92L14.8008 7.71997"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.58 3.96997H6C4.93913 3.96997 3.92178 4.39146 3.17163 5.1416C2.42149 5.89175 2 6.9091 2 7.96997V17.97C2 19.0308 2.42149 20.0482 3.17163 20.7983C3.92178 21.5485 4.93913 21.97 6 21.97H18C19.0609 21.97 20.0783 21.5485 20.8284 20.7983C21.5786 20.0482 22 19.0308 22 17.97V13.8999"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 9.96997H5.37006C6.16571 9.96997 6.92872 10.286 7.49133 10.8486C8.05394 11.4112 8.37006 12.1743 8.37006 12.97C8.37006 13.7656 8.05394 14.5287 7.49133 15.0913C6.92872 15.6539 6.16571 15.97 5.37006 15.97H2"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="col-2">
            <label for="">Dp (%)</label>
            <span> {{ dataKpr.downPaymentPercentage }}%</span>
          </div>
        </div>

        <div class="items">
          <div class="col-1">
            <div class="icon">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
                    fill="#ffffff"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="col-2">
            <label for="">Lama KPR</label>
            <span> {{ dataKpr.kprDuration }} Bulan</span>
          </div>
        </div>

        <div class="items">
          <div class="col-1">
            <div class="icon">
              <svg
                fill="#ffffff"
                width="20px"
                height="20px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M680.629 626.078c0-94.274-76.427-170.701-170.701-170.701-94.265 0-170.691 76.428-170.691 170.701s76.426 170.701 170.691 170.701c94.274 0 170.701-76.427 170.701-170.701zm40.96 0c0 116.895-94.765 211.661-211.661 211.661-116.887 0-211.651-94.767-211.651-211.661s94.764-211.661 211.651-211.661c116.895 0 211.661 94.765 211.661 211.661z"
                  />

                  <path
                    d="M489.454 542.878v166.4c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-166.4c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"
                  />

                  <path
                    d="M593.134 605.598h-166.4c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48h166.4c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48zM456.458 285.736l-80.404-158.218c-3.461-6.812 1.489-14.878 9.134-14.878h251.628c7.645 0 12.59 8.061 9.127 14.873l-80.397 158.224c-5.124 10.084-1.103 22.412 8.981 27.536s22.412 1.103 27.536-8.981l80.394-158.218c17.319-34.058-7.427-74.394-45.64-74.394H385.189c-38.208 0-62.956 40.328-45.651 74.392l80.406 158.221c5.124 10.083 17.453 14.104 27.536 8.979s14.104-17.453 8.979-27.536z"
                  />

                  <path
                    d="M725.04 909.844c101.8 0 184.32-82.52 184.32-184.32v-43.151c0-197.073-161.327-358.4-358.4-358.4h-79.923c-197.073 0-358.4 161.327-358.4 358.4v43.151c0 101.797 82.526 184.32 184.32 184.32H725.04zm0 40.96H296.957c-124.415 0-225.28-100.862-225.28-225.28v-43.151c0-219.695 179.665-399.36 399.36-399.36h79.923c219.695 0 399.36 179.665 399.36 399.36v43.151c0 124.422-100.858 225.28-225.28 225.28z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="col-2">
            <label for="">Bunga Tetap</label>
            <span> {{ dataKpr.fixedInterestRate }}%</span>
          </div>
        </div>

        <div class="items">
          <div class="col-1">
            <div class="icon">
              <svg
                fill="#ffffff"
                width="20px"
                height="20px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M422.4 640h-192l-81.067-81.067c-29.867-29.867-76.8-29.867-102.4 0-12.8 12.8-21.333 34.133-21.333 51.2s8.533 38.4 21.333 51.2l102.4 102.4c12.8 12.8 34.133 21.333 51.2 21.333h149.333v183.467c0 12.8 8.533 21.333 21.333 21.333s21.333-8.533 21.333-21.333v-204.8c0-12.8-8.533-21.333-21.333-21.333H200.532c-4.267 0-17.067-4.267-21.333-8.533l-102.4-102.4c-4.267-4.267-8.533-12.8-8.533-21.333s4.267-17.067 8.533-21.333c12.8-12.8 29.867-12.8 42.667 0l85.333 85.333c4.267 4.267 8.533 8.533 12.8 8.533h200.533c17.067 0 29.867 12.8 29.867 29.867v256c0 12.8 8.533 21.333 21.333 21.333s21.333-8.533 21.333-21.333v-256c4.267-42.667-29.867-72.533-68.267-72.533zm554.667-81.067c-29.867-29.867-76.8-29.867-102.4 0L793.6 640h-192c-38.4 0-72.533 34.133-72.533 72.533v256c0 12.8 8.533 21.333 21.333 21.333s21.333-8.533 21.333-21.333v-256c0-17.067 12.8-29.867 29.867-29.867h200.533c4.267 0 12.8-4.267 17.067-4.267l85.333-85.333c12.8-12.8 29.867-12.8 42.667 0 4.267 4.267 8.533 12.8 8.533 21.333s-4.267 17.067-8.533 21.333l-102.4 102.4c-4.267 4.267-12.8 8.533-21.333 8.533H652.8c-12.8 0-21.333 8.533-21.333 21.333v204.8c0 12.8 8.533 21.333 21.333 21.333s21.333-8.533 21.333-21.333V789.331h149.333c21.333 0 38.4-8.533 51.2-21.333l102.4-102.4c12.8-12.8 21.333-34.133 21.333-51.2 0-25.6-8.533-42.667-21.333-55.467zM443.733 307.2c34.133 0 59.733-25.6 59.733-59.733s-25.6-59.733-59.733-59.733S384 213.334 384 247.467s25.6 59.733 59.733 59.733zm0-76.8c8.533 0 17.067 8.533 17.067 17.067s-8.533 17.067-17.067 17.067c-12.8 0-17.067-8.533-17.067-17.067s4.267-17.067 17.067-17.067zM524.8 371.2c0 34.133 25.6 59.733 59.733 59.733s59.733-25.6 59.733-59.733-25.6-59.733-59.733-59.733-59.733 25.6-59.733 59.733zm81.067 0c0 8.533-8.533 17.067-17.067 17.067s-17.067-8.533-17.067-17.067c0-8.533 8.533-17.067 17.067-17.067s17.067 8.533 17.067 17.067zm-187.734 51.2c4.267 4.267 8.533 4.267 12.8 4.267s12.8-4.267 17.067-8.533l157.867-166.4c8.533-8.533 8.533-21.333 0-29.867s-21.333-8.533-29.867 4.267L418.133 388.267c-8.533 8.533-8.533 25.6 0 34.133z"
                  />

                  <path
                    d="M345.6 610.133h349.867c64 0 119.467-55.467 119.467-119.467V140.799c0-64-55.467-119.467-119.467-119.467H345.6c-64 0-119.467 55.467-119.467 119.467v349.867c0 68.267 55.467 119.467 119.467 119.467zM268.8 140.8c0-42.667 34.133-76.8 76.8-76.8h349.867c42.667 0 76.8 34.133 76.8 76.8v349.867c0 42.667-34.133 76.8-76.8 76.8H345.6c-42.667 0-76.8-34.133-76.8-76.8V140.8z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="col-2">
            <label for="">Bunga Floating</label>
            <span> {{ dataKpr.floatingInterestRate }}%</span>
          </div>
        </div>
      </div>

      <BottomNav />
    </section>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import NavbarDetail from "@/components/NavbarDetail.vue";
import Footer from "@/components/Footer.vue";
import BottomNav from "@/components/BottomNav.vue";

export default defineComponent({
  components: {
    NavbarDetail,
    Footer,
    BottomNav,
  },
  data() {
    return {
      titelNav: "Strategi KPR",
      dataKpr: {},
      urlPath: "/strategy",
    };
  },
  mounted() {
    this.getDataKpr();
  },
  methods: {
    getDataKpr() {
      this.dataKpr = JSON.parse(localStorage.getItem("dataKPR"));
    },
    formatCurrency(value) {
      if (!value) return "";
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(value);
    },
  },
});
</script>

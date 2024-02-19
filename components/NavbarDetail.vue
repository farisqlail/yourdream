<template>
  <div class="navbar flex justify-between">
    <div>
      <nuxt-link to="/" class="btn text-xl p-0 btn-title">
      <img src="~/assets/icons/left-arrow.png" class="w-5" alt="" srcset="">
      </nuxt-link>
    </div>

    <div class="title text-center">
        <span class="font-semibold">Simulasi KPR</span>
    </div>

    <div>
      <button class="btn p-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<style>
.btn-title {
  background: none;
  border: none;
  color: #2d2d2e;
  box-shadow: none;
}

.btn-title:hover {
  background: none;
  border: none;
  color: #2d2d2e;
  box-shadow: none;
}

.btn {
  background: none;
  border: none;
  color: #2d2d2e;
  box-shadow: none;
}

.btn:hover {
  background: none;
  border: none;
  color: #2d2d2e;
  box-shadow: none;
}
</style>
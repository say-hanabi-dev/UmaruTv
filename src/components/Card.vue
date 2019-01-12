<template>
  <a class="umr-card">
    <slot name="umr-card-main"></slot>
    <slot name="umr-card-bottom"></slot>
  </a>
</template>

<script>
export default {};
</script>

<style>
.umr-card {
  box-shadow: 0 0 1px 0 rgb(206, 206, 206);
  margin-bottom: 2rem;
  background: white;
  border-radius: 5px;
  transition: all 0.3s;
  display: flex;
  flex-wrap: wrap;
}
.umr-card.umr-card-sm {
  flex-basis: 23%;
}
.umr-card.umr-card-lg {
  flex-basis: 48.5%;
}
.umr-card:hover {
  box-shadow: 0 0 8px 2px rgb(206, 206, 206);
  transform: translate(0, -2px);
}
@media screen and (min-width: 35.5em) {
}

@media screen and (min-width: 48em) {
}

@media screen and (min-width: 64em) {
  .umr-card.umr-card-sm {
    flex-basis: 23%;
  }
}

@media screen and (min-width: 80em) {
}
</style>

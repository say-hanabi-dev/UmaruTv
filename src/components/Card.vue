<template>
  <a class="umr-card">
    <slot name="umr-card-main"></slot>
    <slot name="umr-card-bottom"></slot>
    <slot name="umr-card-lr"></slot>
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
.umr-card.umr-card-sm img,
.umr-card.umr-card-lg img {
  max-width: 100%;
  border-radius: 5px 5px 0 0;
}

.umr-card-main,
.umr-card-bottom {
  flex-basis: 100%;
}

.umr-card-bottom {
  padding-left: 1.5rem;
  color: #303642;
}

.umr-card-sm .umr-card-bottom {
  padding-left: 0.75rem;
}

.umr-card-sm-title {
  font-weight: bold;
  padding: 0.3rem 0;
  color: #353b47;
}

.umr-card-sm-states {
  text-align: right;
  padding-right: 0.74rem;
  padding-bottom: 0.3rem;
  font-size: 15px;
}

.card-ico,
.umr-card-sm-states {
  color: #aaa;
}
.umr-card-lr {
  padding: 0.5rem;
  border: 1px solid gray;
  color: #353b47;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.umr-card-lr-cover,
.card-cover {
  width: 180px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.umr-card-lr-cover {
  height: 270px;
  flex-basis: 100%;
}
.card-cover {
  width: 100%;
  min-height: 160px;
  border-radius: 5px 5px 0 0;
}
.umr-card-lr-main {
  flex-grow: 2;
  flex-basis: 60%;
  height: 100%;
  max-height: 270px;
  overflow-y: scroll;
}
.umr-card-lr-main::-webkit-scrollbar {
  display: none;
}
.umr-card.umr-card-sm {
  flex-basis: 49%;
}
@media screen and (min-width: 35.5em) {
  .card-cover {
    min-height: 320px;
  }
}

@media screen and (min-width: 48em) {
}

@media screen and (min-width: 64em) {
  .umr-card.umr-card-sm {
    flex-basis: 23%;
  }
  .umr-card-lr-cover {
    flex-basis: unset;
    margin-right: 1rem;
  }
}

@media screen and (min-width: 80em) {
}
</style>

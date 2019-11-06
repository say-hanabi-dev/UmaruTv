<template>
  <div class="umr-pagination">
    <button @click="$emit('set-currentpage',currentPage - 1)">
      <font-awesome-icon icon="angle-left" />
    </button>
    <button
      @click="$emit('set-currentpage',1)"
      :class="{ 'umr-pagination-btnactive':currentPage === 1 }"
    >1</button>
    <button v-if="lastPage > 9 && currentPage >= 8">···</button>
    <button
      @click="$emit('set-currentpage',btnNum + n - 4)"
      v-show="lastPage > 2"
      v-for="n in btnList"
      :key="n"
      :class="{ 'umr-pagination-btnactive':currentPage === btnNum + n - 4 }"
    >{{ btnNum + n - 4 }}</button>
    <button v-if="lastPage > 9 && (currentPage <= 8 || currentPage <= lastPage - 7)">···</button>
    <button
      @click="$emit('set-currentpage',lastPage)"
      v-if="lastPage > 1"
      :class="{ 'umr-pagination-btnactive':currentPage === lastPage }"
    >{{lastPage}}</button>
    <button @click="$emit('set-currentpage',currentPage + 1)">
      <font-awesome-icon icon="angle-right" />
    </button>
  </div>
</template>

<script>
export default {
  props: ["currentPage", "lastPage"],
  computed: {
    btnList: function() {
      if (this.lastPage < 9 && this.lastPage >= 3) {
        return this.lastPage - 2;
      } else if (this.lastPage < 3) {
        return 0;
      } else {
        return 7;
      }
    },
    btnNum: function() {
      if (this.currentPage < 8) {
        return 5;
      } else if (
        this.currentPage >= 8 &&
        this.currentPage <= this.lastPage - 7
      ) {
        return this.currentPage;
      } else {
        return this.lastPage - 4;
      }
    }
  },
  methods: {}
};
</script>

<style>
.umr-pagination * {
  display: inline-block;
}
.umr-pagination {
  flex-basis: 100%;
  margin-bottom: 1rem;
}
.umr-pagination button:hover,
.umr-pagination button.umr-pagination-btnactive {
  background-color: black;
  color: white;
}
.umr-pagination button {
  min-width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid white;
  margin-right: 0.5rem;
  font-size: 14px;
  outline: none;
  transition: 0.3s all;
  margin-bottom: 0.5rem;
}
@media screen and (min-width: 35.5em) {
  .umr-pagination button {
    width: 40px;
    height: 40px;
  }
}
</style>

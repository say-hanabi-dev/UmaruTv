<template>
  <div class="footer">
    <div class="container">
      <div class="pure-g">
        <div class="pure-u-2-3">
          <div class="theme">
            <span>Theme:</span>
            UmaruTv FrontEnd
          </div>
          <div class="about">
            <span>Menu:</span>
            <a href></a>
          </div>
        </div>
        <div class="pure-u-1-3"></div>
      </div>
      <div class="pure-g">
        <div class="copyright pure-u-1">Copyright &copy; 2019 UmaruTv developteam</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style>
.footer {
  background: black;
  color: #818181;
  padding: 1.2rem 1rem 0.6rem 1rem;
}
.theme,
.about {
  margin-bottom: 0.3rem;
  font-size: 14px;
}

.theme span,
.about span {
  color: #999;
  font-weight: bold;
  margin-right: 0.2rem;
}

.copyright {
  font-size: 13px;
  margin-top: 1.2rem;
}
@media screen and (min-width: 35.5em) {
  .footer {
    padding: 1.2rem 0 0.6rem 0;
  }
}
</style>

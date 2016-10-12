
const css = `
body{
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  margin:0;
}
pre{
  font-family:inherit
}
input:focus {
  outline: none;
  box-shadow: inset 0 -2px 0;
}
input[type=range]:focus {
  box-shadow: none;
}
input[type=range]:focus {}
input[type=range]:focus::-webkit-slider-thumb {
  background-color: currentcolor !important;
  box-shadow: 0 0 0 2px;
}
input[type=range]:focus::-moz-range-thumb {
  background-color: currentcolor !important;
  box-shadow: 0 0 0 2px;
}
@media screen and (min-width: 64em) {
  .xh00 { font-size: 12rem }
}
@media screen and (min-height: 48em) {
  .tall-flip {
    display: flex;
    flex-direction: column;
  }
  .tall-flip .tall-top {
    order: 0;
  }
  .tall-flip .tall-bottom {
    order: 1;
  }
}
.nowrap { white-space: nowrap }
`

module.exports = css


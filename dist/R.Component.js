"use strict";

require("6to5/polyfill");
var Promise = require("bluebird");
module.exports = function (R) {
  var Component = {
    Mixin: {
      _ComponentMixin: true,

      mixins: [R.Pure.Mixin, R.Async.Mixin, R.Animate.Mixin, R.Flux.Mixin],

      contextTypes: {
        flux: R.Flux.PropType },

      getFlux: function () {
        return this.context.flux;
      } } };

  return Component;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlIuQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwQyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVMsQ0FBQyxFQUFFO0FBRTNCLE1BQU0sU0FBUyxHQUFHO0FBQ2hCLFNBQUssRUFBRTtBQUNMLHFCQUFlLEVBQUUsSUFBSTs7QUFFckIsWUFBTSxFQUFFLENBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ1osQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ2IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQ2I7O0FBRUQsa0JBQVksRUFBRTtBQUNaLFlBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDdEI7O0FBRUQsYUFBTyxFQUFBLFlBQUc7QUFDUixlQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO09BQzFCLEVBQ0YsRUFDRixDQUFDOztBQUVGLFNBQU8sU0FBUyxDQUFDO0NBQ2xCLENBQUMiLCJmaWxlIjoiUi5Db21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFIpIHtcclxuXHJcbiAgY29uc3QgQ29tcG9uZW50ID0ge1xyXG4gICAgTWl4aW46IHtcclxuICAgICAgX0NvbXBvbmVudE1peGluOiB0cnVlLFxyXG5cclxuICAgICAgbWl4aW5zOiBbXHJcbiAgICAgICAgUi5QdXJlLk1peGluLFxyXG4gICAgICAgIFIuQXN5bmMuTWl4aW4sXHJcbiAgICAgICAgUi5BbmltYXRlLk1peGluLFxyXG4gICAgICAgIFIuRmx1eC5NaXhpbixcclxuICAgICAgXSxcclxuXHJcbiAgICAgIGNvbnRleHRUeXBlczoge1xyXG4gICAgICAgIGZsdXg6IFIuRmx1eC5Qcm9wVHlwZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGdldEZsdXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5mbHV4O1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gQ29tcG9uZW50O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
"use strict";

require("6to5/polyfill");
var Promise = require("bluebird");
module.exports = function (R) {
  var _ = R._;

  function shouldComponentUpdate(props, state) {
    return !(_.isEqual(this.props, props) && _.isEqual(this.state, state));
  }

  var Pure = {
    shouldComponentUpdate: shouldComponentUpdate,

    Mixin: {
      _PureMixin: true,
      shouldComponentUpdate: shouldComponentUpdate } };

  return Pure;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlIuUHVyZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6QixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFTLENBQUMsRUFBRTtBQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVkLFdBQVMscUJBQXFCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUMzQyxXQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7R0FDeEU7O0FBRUQsTUFBTSxJQUFJLEdBQUc7QUFDWCx5QkFBcUIsRUFBckIscUJBQXFCOztBQUVyQixTQUFLLEVBQUU7QUFDTCxnQkFBVSxFQUFFLElBQUk7QUFDaEIsMkJBQXFCLEVBQXJCLHFCQUFxQixFQUN0QixFQUNGLENBQUM7O0FBRUYiLCJmaWxlIjoiUi5QdXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihSKSB7XHJcbiAgY29uc3QgXyA9IFIuXztcclxuXHJcbiAgZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzLCBzdGF0ZSkge1xyXG4gICAgcmV0dXJuICEoXy5pc0VxdWFsKHRoaXMucHJvcHMsIHByb3BzKSAmJiBfLmlzRXF1YWwodGhpcy5zdGF0ZSwgc3RhdGUpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFB1cmUgPSB7XHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUsXHJcblxyXG4gICAgTWl4aW46IHtcclxuICAgICAgX1B1cmVNaXhpbjogdHJ1ZSxcclxuICAgICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gUHVyZTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
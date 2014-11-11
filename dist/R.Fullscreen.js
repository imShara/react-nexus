"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);

  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _extends = function (child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.__proto__ = parent;
};

require("6to5/polyfill");
var Promise = require("bluebird");
module.exports = function (R) {
  return function (params) {
    var Fullscreen = (function (R) {
      var Fullscreen = function Fullscreen(_ref) {
        var flux = _ref.flux;
        var window = _ref.window;
        var req = _ref.req;
        var headers = _ref.headers;

        R.App.Plugin.prototype.apply.call(this, this, arguments);
        if (window) {} else {}
      };

      _extends(Fullscreen, R.App.Plugin);

      _classProps(Fullscreen, null, {
        getDisplayName: {
          writable: true,
          value: function () {
            return "Fullscreen";
          }
        }
      });

      return Fullscreen;
    })(R);

    return Fullscreen;
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImY6L1VzZXJzL0VsaWUvZ2l0L3JlYWN0L3JlYWN0LXJhaWxzL3NyYy9SLkZ1bGxzY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBUyxDQUFDLEVBQUU7QUFDM0IsU0FBTyxVQUFDLE1BQU0sRUFBSztRQUNYLFVBQVUsY0FBUyxDQUFDO1VBQXBCLFVBQVUsR0FDSCxTQURQLFVBQVUsT0FDOEI7WUFBOUIsSUFBSSxRQUFKLElBQUk7WUFBRSxNQUFNLFFBQU4sTUFBTTtZQUFFLEdBQUcsUUFBSCxHQUFHO1lBQUUsT0FBTyxRQUFQLE9BQU87O0FBRGpCLEFBRXJCLFNBRnNCLENBQUMsR0FBRyxDQUFDLE1BQU0sV0FFM0IsVUFBSyxPQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUM3QixZQUFHLE1BQU0sRUFBRSxFQUVWLE1BQ0ksRUFFSjtPQUNGOztlQVRHLFVBQVUsRUFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU07O2tCQUEvQixVQUFVO0FBV2Qsc0JBQWM7O2lCQUFBLFlBQUc7QUFDZixtQkFBTyxZQUFZLENBQUM7V0FDckI7Ozs7YUFiRyxVQUFVO09BQVMsQ0FBQzs7OztBQWdCMUIsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNILENBQUMiLCJmaWxlIjoiUi5GdWxsc2NyZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnNnRvNS9wb2x5ZmlsbCcpO1xuY29uc3QgUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFIpIHtcbiAgcmV0dXJuIChwYXJhbXMpID0+IHtcbiAgICBjbGFzcyBGdWxsc2NyZWVuIGV4dGVuZHMgUi5BcHAuUGx1Z2luIHtcbiAgICAgIGNvbnN0cnVjdG9yKHsgZmx1eCwgd2luZG93LCByZXEsIGhlYWRlcnMgfSkge1xuICAgICAgICBzdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBpZih3aW5kb3cpIHtcbiAgICAgICAgICAvLyBDbGllbnQtb25seSBpbml0XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gU2VydmVyLW9ubHkgaW5pdFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGdldERpc3BsYXlOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0Z1bGxzY3JlZW4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBGdWxsc2NyZWVuO1xuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
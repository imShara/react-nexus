"use strict";

require("6to5/polyfill");
var Promise = require("bluebird");
module.exports = function (R) {
  var _ = require("lodash");
  var React = R.React;

  var _vanillaCreateClass = R.scope(React.createClass, React);

  /**
  * <p>Method definition that complements React.createClass. <br />
  * Used to compute an instance of a React component</p>
  * @class R.ReactCreateClass
  */
  var _patchedCreateClass = function createClass(specs) {
    var createdClass;

    _.defaults(specs, {
      getFluxStoreSubscriptions: _.constant({}),
      statics: {} });

    /**
    * <p> Returns an instance of a component by React context, the property and a defined state </p>
    * @method __ReactOnRailsSurrogate
    * @param {object} context The context of the future component
    * @param {object} props The props of the future component
    * @param {object} initialState The state of the future component
    * @return {object} instance The created component instance
    */
    var __ReactOnRailsSurrogate = function __ReactOnRailsSurrogate(context, props, initialState) {
      var instance;
      React.withContext(context, function () {
        var args = [createdClass, _.omit(props, "children")];
        if (props.children) {
          args.push(props.children);
        }
        var descriptor = React.createElement.apply(React, args);
        instance = R.instantiateReactComponent(descriptor);
        instance.context = context;
        initialState = initialState || {};
        if (instance.getInitialState) {
          initialState = _.extend(initialState, instance.getInitialState() || {});
        }
        _.extend(instance, {
          state: initialState,
          _isReactOnRailsSurrogate_: true,
          __ReactOnRailsSurrogate: __ReactOnRailsSurrogate });
      });
      return instance;
    };

    _.extend(specs.statics, {
      __ReactOnRailsSurrogate: __ReactOnRailsSurrogate });

    createdClass = _.extend(_vanillaCreateClass(specs), {
      __ReactOnRailsSurrogate: __ReactOnRailsSurrogate });

    return createdClass;
  };

  /**
  * <p> Function to use if you want restore native function of React.createClass </p>
  * @method restoreVanillaCreateClass
  */
  _patchedCreateClass.restoreVanillaCreateClass = function () {
    React.createClass = _vanillaCreateClass;
  };

  React.createClass = _patchedCreateClass;

  return _patchedCreateClass;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImQ6L3dvcmtzcGFjZV9yZWZhY3Rvci9yZWFjdC1yYWlscy9zcmMvUi5SZWFjdENyZWF0ZUNsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwQyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVMsQ0FBQyxFQUFFO0FBQ3pCLE1BQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQixNQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztBQUVwQixNQUFJLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQzs7Ozs7OztBQU81RCxNQUFJLG1CQUFtQixHQUFHLFNBQVMsV0FBVyxDQUFDLEtBQUssRUFBRTtBQUNsRCxRQUFJLFlBQVksQ0FBQzs7QUFFakIsS0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFDZCwrQkFBeUIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUN6QyxhQUFPLEVBQUUsRUFBRSxFQUNkLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQVVILFFBQUksdUJBQXVCLEdBQUcsU0FBUyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtBQUN6RixVQUFJLFFBQVEsQ0FBQztBQUNiLFdBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVc7QUFDbEMsWUFBSSxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNyRCxZQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDZixjQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QjtBQUNELFlBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4RCxnQkFBUSxHQUFHLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuRCxnQkFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDM0Isb0JBQVksR0FBRyxZQUFZLElBQUksRUFBRSxDQUFDO0FBQ2xDLFlBQUcsUUFBUSxDQUFDLGVBQWUsRUFBRTtBQUN6QixzQkFBWSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMzRTtBQUNELFNBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0FBQ2YsZUFBSyxFQUFFLFlBQVk7QUFDbkIsbUNBQXlCLEVBQUUsSUFBSTtBQUMvQixpQ0FBdUIsRUFBRSx1QkFBdUIsRUFDbkQsQ0FBQyxDQUFDO09BQ04sQ0FBQyxDQUFDO0FBQ0gsYUFBTyxRQUFRLENBQUM7S0FDbkIsQ0FBQzs7QUFFRixLQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7QUFDcEIsNkJBQXVCLEVBQUUsdUJBQXVCLEVBQ25ELENBQUMsQ0FBQzs7QUFFSCxnQkFBWSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDaEQsNkJBQXVCLEVBQUUsdUJBQXVCLEVBQ25ELENBQUMsQ0FBQzs7QUFFSCxXQUFPLFlBQVksQ0FBQztHQUN2QixDQUFDOzs7Ozs7QUFNRixxQkFBbUIsQ0FBQyx5QkFBeUIsR0FBRyxZQUFXO0FBQ3ZELFNBQUssQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUM7R0FDM0MsQ0FBQzs7QUFFRixPQUFLLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDOztBQUV4QyxTQUFPLG1CQUFtQixDQUFDO0NBQzlCLENBQUMiLCJmaWxlIjoiUi5SZWFjdENyZWF0ZUNsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnNnRvNS9wb2x5ZmlsbCcpO1xuY29uc3QgUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFIpIHtcclxuICAgIHZhciBfID0gcmVxdWlyZShcImxvZGFzaFwiKTtcclxuICAgIHZhciBSZWFjdCA9IFIuUmVhY3Q7XHJcblxyXG4gICAgdmFyIF92YW5pbGxhQ3JlYXRlQ2xhc3MgPSBSLnNjb3BlKFJlYWN0LmNyZWF0ZUNsYXNzLCBSZWFjdCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIDxwPk1ldGhvZCBkZWZpbml0aW9uIHRoYXQgY29tcGxlbWVudHMgUmVhY3QuY3JlYXRlQ2xhc3MuIDxiciAvPlxyXG4gICAgKiBVc2VkIHRvIGNvbXB1dGUgYW4gaW5zdGFuY2Ugb2YgYSBSZWFjdCBjb21wb25lbnQ8L3A+XHJcbiAgICAqIEBjbGFzcyBSLlJlYWN0Q3JlYXRlQ2xhc3NcclxuICAgICovXHJcbiAgICB2YXIgX3BhdGNoZWRDcmVhdGVDbGFzcyA9IGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKHNwZWNzKSB7XHJcbiAgICAgICAgdmFyIGNyZWF0ZWRDbGFzcztcclxuXHJcbiAgICAgICAgXy5kZWZhdWx0cyhzcGVjcywge1xyXG4gICAgICAgICAgICBnZXRGbHV4U3RvcmVTdWJzY3JpcHRpb25zOiBfLmNvbnN0YW50KHt9KSxcclxuICAgICAgICAgICAgc3RhdGljczoge30sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogPHA+IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgYSBjb21wb25lbnQgYnkgUmVhY3QgY29udGV4dCwgdGhlIHByb3BlcnR5IGFuZCBhIGRlZmluZWQgc3RhdGUgPC9wPlxyXG4gICAgICAgICogQG1ldGhvZCBfX1JlYWN0T25SYWlsc1N1cnJvZ2F0ZVxyXG4gICAgICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGNvbnRleHQgb2YgdGhlIGZ1dHVyZSBjb21wb25lbnRcclxuICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBUaGUgcHJvcHMgb2YgdGhlIGZ1dHVyZSBjb21wb25lbnRcclxuICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpbml0aWFsU3RhdGUgVGhlIHN0YXRlIG9mIHRoZSBmdXR1cmUgY29tcG9uZW50XHJcbiAgICAgICAgKiBAcmV0dXJuIHtvYmplY3R9IGluc3RhbmNlIFRoZSBjcmVhdGVkIGNvbXBvbmVudCBpbnN0YW5jZVxyXG4gICAgICAgICovXHJcbiAgICAgICAgdmFyIF9fUmVhY3RPblJhaWxzU3Vycm9nYXRlID0gZnVuY3Rpb24gX19SZWFjdE9uUmFpbHNTdXJyb2dhdGUoY29udGV4dCwgcHJvcHMsIGluaXRpYWxTdGF0ZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIFJlYWN0LndpdGhDb250ZXh0KGNvbnRleHQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbY3JlYXRlZENsYXNzLCBfLm9taXQocHJvcHMsIFwiY2hpbGRyZW5cIildO1xyXG4gICAgICAgICAgICAgICAgaWYocHJvcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2gocHJvcHMuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KFJlYWN0LCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gUi5pbnN0YW50aWF0ZVJlYWN0Q29tcG9uZW50KGRlc2NyaXB0b3IpO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBpbml0aWFsU3RhdGUgfHwge307XHJcbiAgICAgICAgICAgICAgICBpZihpbnN0YW5jZS5nZXRJbml0aWFsU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGUgPSBfLmV4dGVuZChpbml0aWFsU3RhdGUsIGluc3RhbmNlLmdldEluaXRpYWxTdGF0ZSgpIHx8IHt9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF8uZXh0ZW5kKGluc3RhbmNlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGluaXRpYWxTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBfaXNSZWFjdE9uUmFpbHNTdXJyb2dhdGVfOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIF9fUmVhY3RPblJhaWxzU3Vycm9nYXRlOiBfX1JlYWN0T25SYWlsc1N1cnJvZ2F0ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIF8uZXh0ZW5kKHNwZWNzLnN0YXRpY3MsIHtcclxuICAgICAgICAgICAgX19SZWFjdE9uUmFpbHNTdXJyb2dhdGU6IF9fUmVhY3RPblJhaWxzU3Vycm9nYXRlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjcmVhdGVkQ2xhc3MgPSBfLmV4dGVuZChfdmFuaWxsYUNyZWF0ZUNsYXNzKHNwZWNzKSwge1xyXG4gICAgICAgICAgICBfX1JlYWN0T25SYWlsc1N1cnJvZ2F0ZTogX19SZWFjdE9uUmFpbHNTdXJyb2dhdGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjcmVhdGVkQ2xhc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiA8cD4gRnVuY3Rpb24gdG8gdXNlIGlmIHlvdSB3YW50IHJlc3RvcmUgbmF0aXZlIGZ1bmN0aW9uIG9mIFJlYWN0LmNyZWF0ZUNsYXNzIDwvcD5cclxuICAgICogQG1ldGhvZCByZXN0b3JlVmFuaWxsYUNyZWF0ZUNsYXNzXHJcbiAgICAqL1xyXG4gICAgX3BhdGNoZWRDcmVhdGVDbGFzcy5yZXN0b3JlVmFuaWxsYUNyZWF0ZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgUmVhY3QuY3JlYXRlQ2xhc3MgPSBfdmFuaWxsYUNyZWF0ZUNsYXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICBSZWFjdC5jcmVhdGVDbGFzcyA9IF9wYXRjaGVkQ3JlYXRlQ2xhc3M7XHJcblxyXG4gICAgcmV0dXJuIF9wYXRjaGVkQ3JlYXRlQ2xhc3M7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
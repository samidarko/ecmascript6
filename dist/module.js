'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.hello = hello;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hello() {
  return 'hello()';
}

var time = exports.time = new Date();

// works too:
// export {hello, time};

var Client = function () {
  function Client() {
    _classCallCheck(this, Client);

    this.value = 'get';
  }

  _createClass(Client, [{
    key: 'get',
    value: function get() {
      return this.value;
    }
  }], [{
    key: 'staticGet',
    value: function staticGet() {
      console.log('static get');
    }
  }]);

  return Client;
}();

Client.staticGet();

var client = new Client();

exports.default = client;
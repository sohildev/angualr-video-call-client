function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _opentok_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./opentok.service */
    "./src/app/opentok.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./publisher/publisher.component */
    "./src/app/publisher/publisher.component.ts");
    /* harmony import */


    var _subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./subscriber/subscriber.component */
    "./src/app/subscriber/subscriber.component.ts");

    function AppComponent_div_2_app_subscriber_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-subscriber", 3);
      }

      if (rf & 2) {
        var stream_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stream", stream_r2)("session", ctx_r1.session);
      }
    }

    function AppComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-publisher", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_app_subscriber_2_Template, 1, 2, "app-subscriber", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("session", ctx_r0.session);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.streams);
      }
    }

    var AppComponent = function AppComponent(activatedRoute, ref, opentokService) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.activatedRoute = activatedRoute;
      this.ref = ref;
      this.opentokService = opentokService;
      this.title = 'Angular Basic Video Chat Client ';
      this.streams = [];
      this.config = {};
      this.changeDetectorRef = ref;
      this.activatedRoute.snapshot.params['code'];
      this.activatedRoute.queryParams.subscribe(function (params) {
        console.log(params);
        _this.config['API_KEY'] = params['API_KEY'];
        _this.config['TOKEN'] = params['TOKEN'];
        _this.config['SESSION_ID'] = params['SESSION_ID'];
        setTimeout(function () {
          if (_this.config.API_KEY && _this.config.TOKEN && _this.config.SESSION_ID) {
            _this.opentokService.initSession(_this.config).then(function (session) {
              _this.session = session;

              _this.session.on('streamCreated', function (event) {
                _this.streams.push(event.stream);

                _this.changeDetectorRef.detectChanges();
              });

              _this.session.on('streamDestroyed', function (event) {
                var idx = _this.streams.indexOf(event.stream);

                if (idx > -1) {
                  _this.streams.splice(idx, 1);

                  _this.changeDetectorRef.detectChanges();
                }
              });
            }).then(function () {
              return _this.opentokService.connect();
            })["catch"](function (err) {
              console.error(err);
              alert('Unable to connect. Make sure you have updated the configuration details.');
            });
          } else {
            alert("Invalid Data");
          }
        }, 2000);
      });
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_opentok_service__WEBPACK_IMPORTED_MODULE_1__["OpentokService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_opentok_service__WEBPACK_IMPORTED_MODULE_1__["OpentokService"]])],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf"], [2, "width", "600", "height", "600", 3, "session"], ["style", "width:600;height:600;", 3, "stream", "session", 4, "ngFor", "ngForOf"], [2, "width", "600", "height", "600", 3, "stream", "session"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 3, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_4__["PublisherComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_5__["SubscriberComponent"]],
      styles: ["app-publisher[_ngcontent-%COMP%], app-subscriber[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcHVibGlzaGVyLCBhcHAtc3Vic2NyaWJlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          providers: [_opentok_service__WEBPACK_IMPORTED_MODULE_1__["OpentokService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _opentok_service__WEBPACK_IMPORTED_MODULE_1__["OpentokService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: routes, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./publisher/publisher.component */
    "./src/app/publisher/publisher.component.ts");
    /* harmony import */


    var _subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./subscriber/subscriber.component */
    "./src/app/subscriber/subscriber.component.ts");
    /* harmony import */


    var _opentok_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./opentok.service */
    "./src/app/opentok.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '*/:id',
      component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_opentok_service__WEBPACK_IMPORTED_MODULE_5__["OpentokService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_3__["PublisherComponent"], _subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_4__["SubscriberComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_3__["PublisherComponent"], _subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_4__["SubscriberComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([])],
          providers: [_opentok_service__WEBPACK_IMPORTED_MODULE_5__["OpentokService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/opentok.service.ts":
  /*!************************************!*\
    !*** ./src/app/opentok.service.ts ***!
    \************************************/

  /*! exports provided: OpentokService */

  /***/
  function srcAppOpentokServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpentokService", function () {
      return OpentokService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _opentok_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @opentok/client */
    "./node_modules/@opentok/client/dist/js/opentok.js");
    /* harmony import */


    var _opentok_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opentok_client__WEBPACK_IMPORTED_MODULE_1__);

    var OpentokService = /*#__PURE__*/function () {
      function OpentokService() {
        _classCallCheck(this, OpentokService);
      }

      _createClass(OpentokService, [{
        key: "getOT",
        value: function getOT() {
          return _opentok_client__WEBPACK_IMPORTED_MODULE_1__;
        }
      }, {
        key: "initSession",
        value: function initSession(config) {
          if (config.API_KEY && config.TOKEN && config.SESSION_ID) {
            this.session = this.getOT().initSession(config.API_KEY, config.SESSION_ID);
            this.token = config.TOKEN;
            return Promise.resolve(this.session);
          }
        }
      }, {
        key: "connect",
        value: function connect() {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            _this2.session.connect(_this2.token, function (err) {
              if (err) {
                reject(err);
              } else {
                resolve(_this2.session);
              }
            });
          });
        }
      }]);

      return OpentokService;
    }();

    OpentokService.ɵfac = function OpentokService_Factory(t) {
      return new (t || OpentokService)();
    };

    OpentokService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OpentokService,
      factory: OpentokService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpentokService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/publisher/publisher.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/publisher/publisher.component.ts ***!
    \**************************************************/

  /*! exports provided: PublisherComponent */

  /***/
  function srcAppPublisherPublisherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublisherComponent", function () {
      return PublisherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _opentok_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../opentok.service */
    "./src/app/opentok.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["publisherDiv"];

    var _c1 = function _c1(a0) {
      return {
        "publishing": a0
      };
    };

    var publish = function publish() {};

    var PublisherComponent = /*#__PURE__*/function () {
      function PublisherComponent(opentokService) {
        _classCallCheck(this, PublisherComponent);

        this.opentokService = opentokService;
        this.publishing = false;
      }

      _createClass(PublisherComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          var OT = this.opentokService.getOT();
          this.publisher = OT.initPublisher(this.publisherDiv.nativeElement, {
            insertMode: 'append'
          });

          if (this.session) {
            if (this.session['isConnected']()) {
              this.publish();
            }

            this.session.on('sessionConnected', function () {
              return _this3.publish();
            });
          }
        }
      }, {
        key: "publish",
        value: function publish() {
          var _this4 = this;

          this.session.publish(this.publisher, function (err) {
            if (err) {
              alert(err.message);
            } else {
              _this4.publishing = true;
            }
          });
        }
      }]);

      return PublisherComponent;
    }();

    PublisherComponent.ɵfac = function PublisherComponent_Factory(t) {
      return new (t || PublisherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_opentok_service__WEBPACK_IMPORTED_MODULE_1__["OpentokService"]));
    };

    PublisherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PublisherComponent,
      selectors: [["app-publisher"]],
      viewQuery: function PublisherComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.publisherDiv = _t.first);
        }
      },
      inputs: {
        session: "session"
      },
      decls: 2,
      vars: 3,
      consts: [[2, "width", "100%", 3, "ngClass"], ["publisherDiv", ""]],
      template: function PublisherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx.publishing));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1Ymxpc2hlci9wdWJsaXNoZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-publisher',
          templateUrl: './publisher.component.html',
          styleUrls: ['./publisher.component.css']
        }]
      }], function () {
        return [{
          type: _opentok_service__WEBPACK_IMPORTED_MODULE_1__["OpentokService"]
        }];
      }, {
        publisherDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['publisherDiv']
        }],
        session: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/subscriber/subscriber.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/subscriber/subscriber.component.ts ***!
    \****************************************************/

  /*! exports provided: SubscriberComponent */

  /***/
  function srcAppSubscriberSubscriberComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriberComponent", function () {
      return SubscriberComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["subscriberDiv"];

    var SubscriberComponent = /*#__PURE__*/function () {
      function SubscriberComponent() {
        _classCallCheck(this, SubscriberComponent);
      }

      _createClass(SubscriberComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var subscriber = this.session.subscribe(this.stream, this.subscriberDiv.nativeElement, {}, function (err) {
            if (err) {
              alert(err.message);
            }
          });
        }
      }]);

      return SubscriberComponent;
    }();

    SubscriberComponent.ɵfac = function SubscriberComponent_Factory(t) {
      return new (t || SubscriberComponent)();
    };

    SubscriberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubscriberComponent,
      selectors: [["app-subscriber"]],
      viewQuery: function SubscriberComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.subscriberDiv = _t.first);
        }
      },
      inputs: {
        session: "session",
        stream: "stream"
      },
      decls: 2,
      vars: 0,
      consts: [["subscriberDiv", ""]],
      template: function SubscriberComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", null, 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZXIvc3Vic2NyaWJlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-subscriber',
          templateUrl: './subscriber.component.html',
          styleUrls: ['./subscriber.component.css']
        }]
      }], function () {
        return [];
      }, {
        subscriberDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['subscriberDiv']
        }],
        session: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\freelancer\ex\video-call\angualr-video-call-client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
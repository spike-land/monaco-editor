"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var playwright = require("playwright");
var chai_1 = require("chai");
var APP = 'http://127.0.0.1:8080/dist/core.html';
var browser;
var page;
var browserType = process.env.BROWSER || "chromium";
before(function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.timeout(5 * 1000);
                    console.log("Starting browser: " + browserType);
                    return [4, playwright[browserType].launch({
                            headless: process.argv.includes('--headless')
                        })];
                case 1:
                    browser = _a.sent();
                    return [2];
            }
        });
    });
});
after(function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.timeout(5 * 1000);
                    return [4, browser.close()];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
beforeEach(function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.timeout(5 * 1000);
                    return [4, browser.newPage({
                            viewport: {
                                width: 800,
                                height: 600
                            }
                        })];
                case 1:
                    page = _a.sent();
                    return [2];
            }
        });
    });
});
afterEach(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, page.close()];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); });
describe('Basic loading', function () {
    var _this = this;
    this.timeout(20000);
    it('should fail because page has an error', function () { return __awaiter(_this, void 0, void 0, function () {
        var pageErrors, _i, pageErrors_1, e;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pageErrors = [];
                    page.on('pageerror', function (e) {
                        console.log(e);
                        pageErrors.push(e);
                    });
                    page.on('pageerror', function (e) {
                        console.log(e);
                        pageErrors.push(e);
                    });
                    return [4, page.goto(APP)];
                case 1:
                    _a.sent();
                    this.timeout(20000);
                    for (_i = 0, pageErrors_1 = pageErrors; _i < pageErrors_1.length; _i++) {
                        e = pageErrors_1[_i];
                        throw e;
                    }
                    return [2];
            }
        });
    }); });
});
describe('API Integration Tests', function () {
    var _this = this;
    this.timeout(20000);
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, page.goto(APP)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    it('Default initialization should be error-less', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = chai_1.assert).equal;
                        return [4, page.evaluate("monaco.editor.DefaultEndOfLine[1]")];
                    case 1:
                        _b.apply(_a, [_c.sent(), 'LF']);
                        return [2];
                }
            });
        });
    });
    it('Focus and Type', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, page.evaluate("\n        (function () {\n            instance.focus();\n            instance.trigger('keyboard', 'cursorHome');\n            instance.trigger('keyboard', 'type', {\n                text: 'a'\n            });\n        })()\n        ")];
                    case 1:
                        _c.sent();
                        _b = (_a = chai_1.assert).equal;
                        return [4, page.evaluate("instance.getModel().getLineContent(1)")];
                    case 2:
                        _b.apply(_a, [_c.sent(), 'afrom banana import *']);
                        return [2];
                }
            });
        });
    });
    it('Type and Undo', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, page.evaluate("\n        (function () {\n            instance.focus();\n            instance.trigger('keyboard', 'cursorHome');\n            instance.trigger('keyboard', 'type', {\n                text: 'a'\n            });\n            instance.getModel().undo();\n        })()\n        ")];
                    case 1:
                        _c.sent();
                        _b = (_a = chai_1.assert).equal;
                        return [4, page.evaluate("instance.getModel().getLineContent(1)")];
                    case 2:
                        _b.apply(_a, [_c.sent(), 'from banana import *']);
                        return [2];
                }
            });
        });
    });
    it('Multi Cursor', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, page.evaluate("\n        (function () {\n            instance.focus();\n            instance.trigger('keyboard', 'editor.action.insertCursorBelow');\n            instance.trigger('keyboard', 'editor.action.insertCursorBelow');\n            instance.trigger('keyboard', 'editor.action.insertCursorBelow');\n            instance.trigger('keyboard', 'editor.action.insertCursorBelow');\n            instance.trigger('keyboard', 'editor.action.insertCursorBelow');\n            instance.trigger('keyboard', 'type', {\n                text: '# '\n            });\n            instance.focus();\n        })()\n        ")];
                    case 1:
                        _c.sent();
                        return [4, page.waitForTimeout(1000)];
                    case 2:
                        _c.sent();
                        _b = (_a = chai_1.assert).deepEqual;
                        return [4, page.evaluate("\n            [\n                instance.getModel().getLineContent(1),\n                instance.getModel().getLineContent(2),\n                instance.getModel().getLineContent(3),\n                instance.getModel().getLineContent(4),\n                instance.getModel().getLineContent(5),\n                instance.getModel().getLineContent(6),\n                instance.getModel().getLineContent(7),\n            ]\n        ")];
                    case 3:
                        _b.apply(_a, [_c.sent(), [
                                '# from banana import *',
                                '# ',
                                '# class Monkey:',
                                '# 	# Bananas the monkey can eat.',
                                '# 	capacity = 10',
                                '# 	def eat(self, N):',
                                '\t\t\'\'\'Make the monkey eat N bananas!\'\'\''
                            ]]);
                        return [2];
                }
            });
        });
    });
});
//# sourceMappingURL=core.test.js.map
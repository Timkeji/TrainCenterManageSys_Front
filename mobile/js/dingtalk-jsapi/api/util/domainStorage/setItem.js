"use strict";function setItem$(d){return ddSdk_1.ddSdk.invokeAPI(apiName,d)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.setItem$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiName="util.domainStorage.setItem";ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.ios]={vs:"2.9.0"},_a[ddSdk_1.ENV_ENUM.android]={vs:"2.9.0"},_a[ddSdk_1.ENV_ENUM.pc]={vs:"4.6.9"},_a)),exports.setItem$=setItem$,exports.default=setItem$;